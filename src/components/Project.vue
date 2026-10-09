<template>
    <li>
        <!--
            Only named while this tile is transitioning: named elements are lifted above the page
            (and its backdrop) during a view transition, so other tiles would cover the dialog.
            Hidden while open: the dialog has taken over the names.
        -->
        <button
            type="button"
            class="block w-full text-left rounded overflow-hidden bg-zinc-100 dark:bg-zinc-800 focus:outline-none focus-visible:ring-4 ring-zinc-400"
            :class="{ invisible: isOpen }"
            :style="isAnimating && !isOpen ? cardTransition : undefined"
            aria-haspopup="dialog"
            @click="open"
        >
            <ProjectMedia
                :project="project"
                :loading="index && index > 5 ? 'lazy' : undefined"
                :named="isAnimating && !isOpen"
            />
        </button>
        <dialog
            ref="dialogRef"
            class="p-0 m-auto w-[calc(100%-2rem)] max-w-2xl max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain rounded bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 project-dialog backdrop:bg-black/70"
            :style="isOpen ? cardTransition : undefined"
            :aria-label="project.title"
            @cancel.prevent="close"
            @close="isOpen = false"
            @click="onDialogClick"
        >
            <div v-if="isOpen">
                <ProjectMedia :project="project" named>
                    <button
                        type="button"
                        class="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
                        @click="close"
                    >
                        <IClose class="w-5 h-5" />
                        <span class="sr-only">Fermer</span>
                    </button>
                </ProjectMedia>
                <div class="p-4 md:p-5 flex flex-col gap-4">
                    <p v-if="project.description">{{ project.description }}</p>
                    <ul class="flex flex-wrap gap-2" v-if="project.tags && project.tags.length">
                        <li
                            v-for="tag in project.tags"
                            class="inline-block px-4 py-2 bg-zinc-200 dark:bg-zinc-700 font-medium text-xs uppercase rounded-full whitespace-nowrap"
                        >
                            {{ tag }}
                        </li>
                    </ul>
                    <a
                        v-if="project.url"
                        :href="project.url"
                        target="_blank"
                        class="inline-flex self-start gap-1 font-bold text-zinc-900 dark:text-white hover:opacity-70 transition"
                    >
                        Voir le projet <IArrowRight class="w-5" />
                    </a>
                </div>
            </div>
        </dialog>
    </li>
</template>

<script lang="ts" setup>
import IArrowRight from '@/assets/svg/arrow-right.svg?component';
import IClose from '@/assets/svg/close.svg?component';

const props = defineProps({
    project: {
        type: Object,
        default: null,
        required: true,
    },
    index: {
        type: Number,
        default: undefined,
    },
});

const dialogRef = ref<HTMLDialogElement | null>(null);
const isOpen = ref(false);

// The tile and the dialog share these names, so the tile morphs into the dialog
const cardTransition = {
    viewTransitionName: `project-card-${props.project._path.replace(/[^a-z0-9]/gi, '-')}`,
    viewTransitionClass: 'project-card',
};

const isAnimating = ref(false);

async function withViewTransition(direction: 'open' | 'close', update: () => Promise<void>) {
    const doc = document as Document & {
        startViewTransition?: (cb: () => Promise<void>) => { finished: Promise<void> };
    };
    if (!doc.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) {
        await update();
        return;
    }
    // Apply the names (and the direction, used by the shadow animation) before the old state is captured
    isAnimating.value = true;
    document.documentElement.dataset.projectTransition = direction;
    await nextTick();
    doc.startViewTransition(update).finished.finally(() => {
        isAnimating.value = false;
        delete document.documentElement.dataset.projectTransition;
    });
}

function open() {
    withViewTransition('open', async () => {
        isOpen.value = true;
        await nextTick();
        dialogRef.value?.showModal();
        // Make sure the image and logo are painted before the new state is captured
        const images = [...(dialogRef.value?.querySelectorAll('img') ?? [])];
        await Promise.all(images.map((img) => img.decode().catch(() => {})));
    });
}

function close() {
    withViewTransition('close', async () => {
        dialogRef.value?.close();
        isOpen.value = false;
        await nextTick();
    });
}

// A click on the dialog element itself (not its content) is a click on the backdrop
function onDialogClick(event: MouseEvent) {
    if (event.target === dialogRef.value) close();
}
</script>

<style lang="postcss">
html:has(dialog[open]) {
    overflow: hidden;
}

.project-dialog {
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}

::view-transition-group(.project),
::view-transition-group(.project-card) {
    animation-duration: 0.45s;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* Tile and dialog have different heights: crop instead of stretching while the box grows */
::view-transition-old(.project-card),
::view-transition-new(.project-card) {
    height: 100%;
    object-fit: cover;
    object-position: top;
}
::view-transition-image-pair(.project-card) {
    overflow: clip;
    border-radius: 0.25rem;
}

/*
 * The snapshot would clip the dialog's shadow, so it is left out of the snapshot
 * and animated on the image pair instead (which ends exactly where the real one starts).
 */
html[data-project-transition] .project-dialog {
    box-shadow: none;
}
html[data-project-transition='open']::view-transition-image-pair(.project-card) {
    animation: project-shadow 0.45s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
html[data-project-transition='close']::view-transition-image-pair(.project-card) {
    animation: project-shadow 0.45s cubic-bezier(0.2, 0.8, 0.2, 1) reverse both;
}
@keyframes project-shadow {
    from {
        box-shadow: 0 0 0 0 rgb(0 0 0 / 0);
    }
    to {
        box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    }
}
</style>
