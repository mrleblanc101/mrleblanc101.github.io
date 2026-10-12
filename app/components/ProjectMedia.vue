<template>
    <div class="relative overflow-hidden" :style="named ? transition('image') : undefined">
        <NuxtPicture
            class="block transition-transform duration-500 motion-safe:group-hover:scale-105 [&_img]:w-full"
            :src="`/projets/${project.stem}/thumbnail.jpg`"
            :alt="`Image: ${project.title}`"
            :loading="loading"
            width="600"
            height="375"
            quality="80"
            :sizes="sizes"
        />
        <div
            class="absolute inset-x-0 bottom-0 flex h-[min(184px,60%)] items-end bg-linear-to-t from-black/80 to-transparent p-4 md:px-5 md:py-4"
        >
            <img
                class="max-h-[70px] transition-transform duration-500"
                :style="named ? transition('logo') : undefined"
                :src="`/projets/${project.stem}/logo.svg`"
                :alt="`Logo: ${project.title}`"
            />
        </div>
        <!-- Overlays rendered here (e.g. the dialog's close button) animate along with the image -->
        <slot />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    project: { stem: string; title: string };
    loading?: 'lazy';
    sizes: string;
    // Carries the shared view-transition names (only one element per name may be rendered at a time)
    named: boolean;
}>();

const transition = (part: string) => ({
    viewTransitionName: `project-${part}-${props.project.stem.replace(/[^a-z0-9]/gi, '-')}`,
    viewTransitionClass: 'project',
});
</script>
