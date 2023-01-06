<template>
    <li
        :class="{
            'col-span-2': index === 0,
        }"
    >
        <nuxt-link
            class="block rounded p-10 border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700"
            :to="post._path"
        >
            <div>6 janvier 2023</div>
            <h2 class="font-black text-3xl">{{ post.title }}</h2>
        </nuxt-link>
    </li>
</template>

<script lang="ts" setup>
defineProps({
    index: {
        type: Number,
        default: 0,
        required: true,
    },
    post: {
        type: Object,
        default: null,
        required: true,
    },
});
</script>
