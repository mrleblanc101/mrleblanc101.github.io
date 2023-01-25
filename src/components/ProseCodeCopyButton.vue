<template>
    <button :class="[(show || state === 'copied') && 'show']" @click="copy">
        <span class="sr-only select-none">Copy to clipboard</span>
        <span class="icon-wrapper">
            <Transition name="fade">
                <IconClipboardCheck v-if="state === 'copied'" class="icon w-5 h-5" />
                <IconClipboardCopy v-else class="icon w-5 h-5" />
            </Transition>
        </span>
    </button>
</template>

<script lang="ts" setup>
import IconClipboardCheck from '@/assets/svg/clipboard-check.svg?component';
import IconClipboardCopy from '@/assets/svg/clipboard-copy.svg?component';

import { useClipboard } from '@vueuse/core';

const props = defineProps({
    content: {
        type: String,
        default: '',
    },
    show: {
        type: Boolean,
        default: false,
    },
});
const { copy: copyToClipboard } = useClipboard();
const state = ref('init');
const copy = (_e: MouseEvent) => {
    copyToClipboard(props.content)
        .then(() => {
            state.value = 'copied';
            setTimeout(() => {
                state.value = 'init';
            }, 2000);
        })
        .catch((err) => {
            console.warn("Couldn't copy to clipboard!", err);
        });
};
</script>

<style lang="postcss" scoped>
button {
    @apply p-2 m-2 rounded transition duration-100 scale-75 opacity-0 backdrop-blur-sm;
    &.show {
        @apply scale-100 opacity-100;
    }
}
.icon-wrapper {
    @apply block relative w-5 h-5;
    .icon {
        @apply block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
    }
    .fade-enter-active,
    .fade-leave-active {
        @apply transition duration-200;
    }
    .fade-enter-from,
    .fade-leave-to {
        @apply opacity-0;
    }
}
</style>
