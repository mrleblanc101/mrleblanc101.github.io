<template>
    <li
        class="relative rounded overflow-hidden after:content-[''] after:absolute after:top-[38%] after:bottom-0 after:w-full after:bg-gradient-to-t after:from-black after:to-transparent after:pointer-events-none z-10"
    >
        <a :href="project.url" target="_blank">
            <img
                class="w-full aspect-[16/10] object-cover"
                :src="`${project._path}/thumbnail.jpg`"
                width="600"
                height="365"
            />
            <div class="absolute p-3 md:p-6 bottom-0 left-0 w-full z-50">
                <img class="max-h-[65px]" :src="`${project._path}/logo.svg`" />
            </div>
            <div hidden class="absolute">{{ project.title }}</div>
        </a>
    </li>
</template>

<script lang="ts" setup>
defineProps({
    project: {
        type: Object,
        default: null,
        required: true,
    },
});
</script>
