<template>
    <!-- Add reading time -->
    <!-- Add published date -->
    <ContentDoc class="nuxt-content" />
    <div class="flex">
        <NuxtLink class="mr-auto" v-if="prev" :to="prev._path">
            {{ prev.title }}
        </NuxtLink>
        <NuxtLink class="ml-auto" v-if="next" :to="next._path">
            {{ next.title }}
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
.nuxt-content p {
    @apply max-w-2xl;
}
</style>
