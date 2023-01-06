<template>
    <li
        class="relative rounded overflow-hidden after:content-[''] after:absolute after:top-[38%] after:bottom-0 after:w-full after:bg-gradient-to-t after:from-black after:to-transparent after:pointer-events-none z-10 bg-zinc-100 dark:bg-zinc-800"
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
            <div class="absolute p-3 md:p-6 bottom-0 left-0 w-full z-50">
                <img class="max-h-[65px]" :src="`${project._path}/logo.svg`" :alt="`Logo: ${project.title}`" />
                <div hidden class="absolute">{{ project.title }}</div>
            </div>
        </component>
    </li>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
defineProps({
    project: {
        type: Object,
        default: null,
        required: true,
    },
});
</script>
