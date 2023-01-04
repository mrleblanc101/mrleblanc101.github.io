<template>
    <div class="min-h-screen flex flex-col">
        <AppHeader />
        <slot></slot>
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
        class: 'antialiased overflow-x-clip text-gray-700 leading-normal bg-white dark:bg-gray-900 dark:text-gray-300',
    },
});
</script>
