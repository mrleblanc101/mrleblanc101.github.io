<template>
    <li
        class="group relative rounded overflow-hidden bg-zinc-100 dark:bg-zinc-800"
        @mouseenter="is_expanded = true"
        @mouseleave="is_expanded = false"
    >
        <component
            :is="project.url ? 'a' : 'div'"
            :href="project.url ? project.url : null"
            :target="project.url ? '_blank' : null"
        >
            <!-- <div class="absolute p-4 text-2xl top-0 left-0 bg-red-500 text-white">{{ project.order }}</div> -->
            <img
                class="w-full aspect-[16/10] object-cover"
                :src="`${project._path}/thumbnail.jpg`"
                width="600"
                height="365"
                :alt="`Image: ${project.title}`"
                loading="lazy"
            />
            <div
                class="after:content-[''] after:absolute after:-top-[100%] after:bottom-0 after:-left-3 after:-right-3 md:after:-left-6 md:after:-right-6 after:bg-gradient-to-t after:from-black/70 after:to-transparent after:pointer-events-none absolute p-3 md:p-6 bottom-0 left-0 w-full after:-z-10 z-50"
            >
                <img class="relative max-h-[60px]" :src="`${project._path}/logo.svg`" :alt="`Logo: ${project.title}`" />
                <Collapse :when="is_expanded" class="v-collapsed">
                    <div class="mt-4">
                        Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit
                        amet non magna. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta
                        gravida at eget metus.
                    </div>
                </Collapse>
            </div>
        </component>
    </li>
</template>

<script lang="ts" setup>
const is_expanded = ref(false);

defineProps({
    project: {
        type: Object,
        default: null,
        required: true,
    },
});
</script>

<style lang="postcss" scoped>
.v-collapsed {
    transition: height var(--vc-auto-duration) cubic-bezier(0.3, 0, 0.6, 1);
}
</style>
