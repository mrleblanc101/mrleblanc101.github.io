<template>
    <div class="relative overflow-hidden" :style="named ? transition('image') : undefined">
        <NuxtPicture
            class="block [&_img]:w-full transition-transform duration-500 motion-safe:group-hover:scale-105"
            :src="`/${project.stem}/thumbnail.jpg`"
            :alt="`Image: ${project.title}`"
            :loading="loading"
            width="600"
            height="365"
            quality="80"
            :sizes="sizes"
        />
        <div
            class="absolute inset-x-0 bottom-0 h-[min(184px,60%)] p-4 md:px-5 md:py-4 flex items-end bg-linear-to-t from-black/80 to-transparent"
        >
            <img
                class="max-h-[60px] transition-transform duration-500"
                :style="named ? transition('logo') : undefined"
                :src="`/${project.stem}/logo.svg`"
                :alt="`Logo: ${project.title}`"
            />
        </div>
        <!-- Overlays rendered here (e.g. the dialog's close button) animate along with the image -->
        <slot />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    project: Record<string, any>;
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
