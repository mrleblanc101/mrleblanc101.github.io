<template>
    <code>
        <slot />
    </code>
</template>

<style lang="postcss" scoped>
code {
    @apply before:hidden after:hidden rounded py-1 px-1.5 whitespace-pre-wrap break-words text-inherit bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[80%];
}
</style>
