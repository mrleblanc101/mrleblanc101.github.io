<template>
    <section class="max-w-screen-xl w-full mx-auto px-4 my-16 lg:px-8">
        <h1 class="font-marvin font-black uppercase text-5xl mb-4 tracking-wide">Blog</h1>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 -mx-10">
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
