<template>
    <div
        :class="[`highlight-${language}`]"
        class="prose-code"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
    >
        <span v-if="filename" class="filename">
            {{ filename }}
        </span>

        <slot />

        <ProseCodeCopyButton :show="hovered" :content="code" class="copy-button" />
    </div>
</template>

<script setup lang="ts">
import type { Lang } from 'shiki-es';

defineProps({
    code: {
        type: String,
        default: '',
    },
    language: {
        type: String as PropType<Lang>,
        default: null,
    },
    filename: {
        type: String,
        default: null,
    },
    highlights: {
        type: Array as () => number[],
        default: () => [],
    },
});
const hovered = ref(false);
</script>

<style lang="postcss" scoped>
.prose-code {
    @apply relative overflow-hidden rounded w-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700;
    &:hover {
        .filename {
            @apply opacity-0;
            &:hover {
                @apply opacity-100;
            }
        }
    }
    .filename {
        @apply absolute top-0 right-0 py-2 px-3 font-mono transition duration-200 backdrop-blur-sm text-base rounded;
    }
    .copy-button {
        @apply absolute bottom-0 right-0;
    }
    :deep(.line) {
        @apply inline-table min-h-[1rem];
    }
    :deep(pre) {
        @apply flex flex-1 overflow-x-auto m-0 bg-transparent;
    }
    :deep(pre code) {
        @apply flex flex-col w-full;
    }
    :deep(.line.highlight) {
        @apply bg-zinc-200 -mx-6 px-6;
    }
    :deep(.line.highlight) {
        @apply dark:bg-zinc-700;
    }
}
</style>
