<template>
    <div class="min-h-screen flex flex-col">
        <AppHeader />
        <main class="grow w-full">
            <article class="prose dark:prose-invert max-w-screen-xl mx-auto p-4 lg:px-8 z-0">
                <slot></slot>
            </article>
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
            content: 'width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0',
        },
    ],
    // link: [
    //     {
    //         rel: 'icon',
    //         href: '/favicon.svg',
    //         type: 'image/svg+xml',
    //     },
    //     {
    //         rel: 'apple-touch-icon',
    //         sizes: '180x180',
    //         href: '/apple-touch-icon.png',
    //     },
    //     {
    //         rel: 'manifest',
    //         href: '/manifest.webmanifest',
    //     },
    // ],
    bodyAttrs: {
        class: 'antialiased overflow-x-clip text-gray-700 leading-normal bg-white dark:bg-zinc-900 dark:text-gray-300',
    },
});
</script>
