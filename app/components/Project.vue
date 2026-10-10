<template>
    <li>
        <!-- Outside the button: headings aren't allowed inside one -->
        <component :is="heading" class="sr-only">{{ project.title }}</component>
        <!--
            Only named while this tile is transitioning: named elements are lifted above the page
            (and its backdrop) during a view transition, so other tiles would cover the dialog.
            Hidden while open: the dialog has taken over the names.
        -->
        <button
            type="button"
            class="group block w-full text-left rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 focus:outline-hidden focus-visible:ring-4 ring-zinc-400"
            :class="{ invisible: isOpen }"
            :style="isAnimating && !isOpen ? cardTransition : undefined"
            aria-haspopup="dialog"
            @click="open"
        >
            <!-- The media is captured on its own during the view transition: it needs its own rounded corners -->
            <ProjectMedia
                class="rounded-xl"
                :project="project"
                :loading="index && index > 5 ? 'lazy' : undefined"
                sizes="sm:100vw md:50vw lg:33vw 2xl:480px"
                :named="isAnimating && !isOpen"
            />
        </button>
        <dialog
            ref="dialogRef"
            class="p-0 m-auto w-[calc(100%-2rem)] max-w-4xl max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain rounded-xl bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-300 project-dialog backdrop:bg-black/70"
            :style="isOpen ? cardTransition : undefined"
            :aria-label="project.title"
            @cancel.prevent="close"
            @close="isOpen = false"
            @click="onDialogClick"
        >
            <!--
                Prerendered (closed) so the optimized variants of its image are generated.
                Lazy until opened, so it isn't downloaded with the page; eager once open, since lazy loading
                can't start while the view transition has paused rendering
            -->
            <ProjectMedia
                class="rounded-t-xl"
                :project="project"
                :loading="isOpen ? 'eager' : 'lazy'"
                sizes="sm:100vw md:896px"
                :named="isOpen"
            >
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
                        class="inline-block px-4 py-2 bg-zinc-200 dark:bg-zinc-800 font-medium text-xs uppercase rounded-full whitespace-nowrap"
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
    // Level of the (visually hidden) title, one below the heading above the grid
    heading: {
        type: String as PropType<'h2' | 'h3' | 'h4'>,
        required: true,
    },
});

const dialogRef = ref<HTMLDialogElement | null>(null);
const isOpen = ref(false);

// The tile and the dialog share these names, so the tile morphs into the dialog
const cardTransition = {
    viewTransitionName: `project-card-${props.project.stem.replace(/[^a-z0-9]/gi, '-')}`,
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

<style>
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
    /* Same as the tile and dialog (rounded-xl) */
    border-radius: var(--radius-xl);
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
