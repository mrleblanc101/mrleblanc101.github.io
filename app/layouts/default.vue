<template>
    <div class="flex min-h-screen flex-col">
        <AppHeader />
        <main class="w-full grow">
            <slot></slot>
        </main>
        <AppFooter />
    </div>
</template>

<script lang="ts" setup>
const { baseURL } = useRuntimeConfig().app;

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
                'Bonjour, je suis Sébastien LeBlanc. Un développeur Front-end qui conçoit des produits numériques depuis 2017.',
        },
        {
            property: 'og:image',
            content: 'https://mrleblanc101.github.io/og-image.jpg',
        },
        {
            property: 'og:image:width',
            content: '1200',
        },
        {
            property: 'og:image:height',
            content: '630',
        },
        {
            property: 'og:image:alt',
            content: 'Sébastien LeBlanc',
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
    ],
    link: [
        {
            rel: 'icon',
            href: `${baseURL}favicon.svg`,
            type: 'image/svg+xml',
        },
        {
            rel: 'manifest',
            href: `${baseURL}manifest.webmanifest`,
        },
    ],
    htmlAttrs: {
        lang: 'fr',
    },
    bodyAttrs: {
        class: 'antialiased overflow-x-clip text-gray-700 leading-normal bg-white dark:bg-zinc-950 dark:text-gray-300',
    },
});
</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    /* filter: blur(6px); */
}

.layout-enter-active,
.layout-leave-active {
    transition: all 0.3s;
}
.layout-enter-from,
.layout-leave-to {
    opacity: 0;
    /* filter: blur(6px); */
}
</style>
