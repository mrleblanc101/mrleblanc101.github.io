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
            ref="tileRef"
            type="button"
            class="group block w-full overflow-hidden rounded-xl bg-zinc-100 text-left ring-zinc-400 focus:outline-hidden focus-visible:ring-4 dark:bg-zinc-900"
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
            class="project-dialog m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto overscroll-contain rounded-xl bg-white p-0 text-gray-700 backdrop:bg-black/70 dark:bg-zinc-900 dark:text-gray-300"
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
                    class="absolute top-3 right-3 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
                    @click="close"
                >
                    <IClose class="h-5 w-5" />
                    <span class="sr-only">Fermer</span>
                </button>
            </ProjectMedia>
            <div class="flex flex-col gap-4 p-4 md:p-5">
                <p v-if="project.description">{{ project.description }}</p>
                <ul v-if="project.tags && project.tags.length" class="flex flex-wrap gap-2">
                    <li
                        v-for="tag in project.tags"
                        :key="tag"
                        class="inline-block rounded-full bg-zinc-200 px-4 py-2 text-xs font-medium whitespace-nowrap uppercase dark:bg-zinc-800"
                    >
                        {{ tag }}
                    </li>
                </ul>
                <a
                    v-if="project.url"
                    :href="project.url"
                    target="_blank"
                    class="inline-flex gap-1 self-start font-bold text-zinc-900 transition hover:opacity-70 dark:text-white"
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
const tileRef = ref<HTMLButtonElement | null>(null);
const isOpen = ref(false);

// The tile and the dialog share these names, so the tile morphs into the dialog
const cardTransition = {
    viewTransitionName: `project-card-${props.project.stem.replace(/[^a-z0-9]/gi, '-')}`,
    viewTransitionClass: 'project-card',
};

const isAnimating = ref(false);

type Direction = 'open' | 'close';
type Transition = { ready: Promise<void>; finished: Promise<void> };

// The transition in progress, and the state it is currently heading to
let active: { transition: Transition; direction: Direction } | null = null;

async function withViewTransition(direction: Direction, update: () => Promise<void>) {
    if (active) {
        if (active.direction !== direction) reverseTransition(active, direction, update);
        return;
    }
    const doc = document as Document & {
        startViewTransition?: (cb: () => Promise<void>) => Transition;
    };
    if (!doc.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) {
        await update();
        return;
    }
    // Apply the names (and the direction, used by the shadow animation) before the old state is captured
    isAnimating.value = true;
    document.documentElement.dataset.projectTransition = direction;
    await nextTick();
    const transition = doc.startViewTransition(update);
    active = { transition, direction };
    document.addEventListener('click', onTransitionClick);
    transition.finished.finally(() => {
        document.removeEventListener('click', onTransitionClick);
        active = null;
        isAnimating.value = false;
        delete document.documentElement.dataset.projectTransition;
    });
}

/*
 * Starting a new transition would skip the current one to its end (the dialog would jump),
 * so the running animations are played backwards instead, and the state is applied once they're back at the start.
 */
async function reverseTransition(
    current: NonNullable<typeof active>,
    direction: Direction,
    update: () => Promise<void>,
) {
    current.direction = direction;
    // The animations only exist once the new state has been captured
    await current.transition.ready.catch(() => {});
    const animations = document
        .getAnimations()
        .filter((animation) =>
            (animation.effect as KeyframeEffect | null)?.pseudoElement?.startsWith('::view-transition'),
        );
    animations.forEach((animation) => animation.reverse());
    await Promise.all(animations.map((animation) => animation.finished.catch(() => {})));
    // Reversed again in the meantime: the latest call applies its own state
    if (current.direction === direction) await update();
}

function isInside(element: Element | null, { clientX, clientY }: MouseEvent) {
    const rect = element?.getBoundingClientRect();
    return !!rect && clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
}

/*
 * During a view transition, every click targets the root element (the page is only a snapshot),
 * so the backdrop and the tile are found by position, from where they are in the new state
 */
function onTransitionClick(event: MouseEvent) {
    if (event.target !== document.documentElement) return;
    if (active?.direction === 'open' && !isInside(dialogRef.value, event)) close();
    else if (active?.direction === 'close' && isInside(tileRef.value, event)) open();
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
 * Chrome renders the default crossfade wrong once it's reversed (the old snapshot jumps back to fully opaque,
 * so the backdrop disappears at once): the same crossfade with explicit keyframes reverses smoothly.
 * Replacing the animation names drops the default blend mode animation, so it's set here instead.
 */
html[data-project-transition]::view-transition-old(*) {
    animation-name: project-fade-out;
    mix-blend-mode: plus-lighter;
}
html[data-project-transition]::view-transition-new(*) {
    animation-name: project-fade-in;
    mix-blend-mode: plus-lighter;
}
@keyframes project-fade-out {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
@keyframes project-fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
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
