<template>
    <div class="min-h-screen flex flex-col">
        <AppHeader />
        <main class="grow w-full">
            <slot></slot>
        </main>
        <AppFooter />
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: 'Sébastien LeBlanc',
    meta: [
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
        },
        {
            name: 'description',
            content:
                'Bonjour, je suis Sébastien LeBlanc. Un développeur Front-end qui conçois des produits numériques depuis 2017.',
        },
    ],
    link: [
        {
            rel: 'icon',
            href: '/favicon.svg',
            type: 'image/svg+xml',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
        },
    ],
    htmlAttrs: {
        lang: 'fr',
    },
    bodyAttrs: {
        class: 'antialiased overflow-x-clip text-gray-700 leading-normal bg-white dark:bg-zinc-900 dark:text-gray-300',
    },
});
</script>

<style lang="postcss">
.page-enter-active,
.page-leave-active {
    transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(6px);
}

.layout-enter-active,
.layout-leave-active {
    transition: all 0.3s;
}
.layout-enter-from,
.layout-leave-to {
    opacity: 0;
    filter: blur(6px);
}
</style>
