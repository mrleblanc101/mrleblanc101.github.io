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
            sizes="sm:100vw lg:50vw lg:50vw xl:600px"
        />
        <div
            class="absolute inset-x-0 bottom-0 h-[184px] p-4 md:px-5 md:py-4 flex items-end bg-linear-to-t from-black/80 to-transparent pointer-events-none"
        >
            <img
                class="max-h-[60px] transition-transform duration-500 motion-safe:group-hover:-translate-y-1"
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
    // Carries the shared view-transition names (only one element per name may be rendered at a time)
    named: boolean;
}>();

const transition = (part: string) => ({
    viewTransitionName: `project-${part}-${props.project.stem.replace(/[^a-z0-9]/gi, '-')}`,
    viewTransitionClass: 'project',
});
</script>
