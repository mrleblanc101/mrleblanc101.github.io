<template>
    <code>
        <slot />
    </code>
</template>

<style scoped>
@reference '@/assets/css/app.css';

code {
    @apply before:hidden after:hidden rounded-sm py-1 px-1.5 whitespace-pre-wrap wrap-break-word text-inherit bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[80%];
}
</style>
