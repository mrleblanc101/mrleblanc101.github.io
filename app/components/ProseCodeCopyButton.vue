<template>
    <button class="copy-button" :class="[(show || state === 'copied') && 'show']" @click="copy">
        <span class="sr-only select-none">Copier dans le presse-papiers</span>
        <span class="icon-wrapper">
            <Transition name="fade">
                <IconClipboardCheck v-if="state === 'copied'" class="icon h-5 w-5" />
                <IconClipboardCopy v-else class="icon h-5 w-5" />
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
