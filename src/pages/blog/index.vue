<template>
    <section class="max-w-screen-xl w-full mx-auto px-4 my-6 lg:my-16 lg:px-8">
        <h1 class="font-marvin font-black uppercase text-3xl md:text-5xl mb-4 tracking-wide">blog</h1>
        <ul class="flex flex-col gap-4">
            <Post v-for="(post, i) in posts" :post="post" :index="i" />
        </ul>
    </section>
</template>

<script lang="ts" setup>
const { data: posts } = await useAsyncData('posts', () =>
    queryContent('/blog')
        .sort({
            createdAt: -1,
            pinned: 1,
            $numeric: true,
        })
        .find(),
);
</script>
