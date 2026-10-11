<template>
    <section class="mx-auto my-6 w-full max-w-(--breakpoint-2xl) px-4 lg:my-16 lg:px-8">
        <h1 class="mb-4 font-marvin text-3xl tracking-wide text-black uppercase md:text-5xl dark:text-white">Blog</h1>
        <ul class="flex flex-col gap-4">
            <Post v-for="(post, i) in posts" :key="post.path" :post="post" :index="i" />
        </ul>
    </section>
</template>

<script lang="ts" setup>
definePageMeta({ middleware: 'blog' });

const { data: posts } = await useAsyncData('posts', () =>
    queryCollection('blog').order('createdAt', 'DESC').order('pinned', 'ASC').all(),
);
</script>
