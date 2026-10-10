<template>
    <div
        :class="[`highlight-${language}`]"
        class="prose-pre"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
    >
        <span v-if="filename" class="filename">
            {{ filename }}
        </span>

        <pre :class="$props.class"><slot /></pre>

        <ProseCodeCopyButton :show="hovered" :content="code" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    code: {
        type: String,
        default: '',
    },
    language: {
        type: String,
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
    meta: {
        type: String,
        default: null,
    },
    class: {
        type: String,
        default: null,
    },
});
const hovered = ref(false);
</script>
