<template>
    <!-- Add reading time -->
    <!-- Add published date -->
    <ContentDoc class="prose md:prose-xl dark:prose-invert" />
    <div class="flex flex-col md:flex-row gap-4 mt-16 px-10 -mx-20 -mx-10">
        <NuxtLink
            class="md:mr-auto p-10 bg-zinc-100 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition"
            v-if="prev"
            :to="prev._path"
        >
            <div class="opacity-70 font-medium">Précédent</div>
            <div class="font-black text-xl">{{ prev.title }}</div>
        </NuxtLink>
        <NuxtLink
            class="md:ml-auto p-10 bg-zinc-100 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition"
            v-if="next"
            :to="next._path"
        >
            <div class="opacity-70 font-medium">Suivant</div>
            <div class="font-black text-xl">{{ next.title }}</div>
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'single',
});

const route = useRoute();
const [prev, next] = await queryContent('/blog').findSurround(route.fullPath);
</script>

<style lang="postcss">
.prose p {
    @apply max-w-2xl;
}
</style>
