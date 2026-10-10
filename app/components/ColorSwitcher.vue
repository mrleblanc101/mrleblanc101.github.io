<template>
    <button
        type="button"
        class="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-sm transition text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white focus:outline-hidden focus-visible:ring-3 ring-zinc-400 dark:ring-zinc-500"
        @click="onClick"
    >
        <span class="sr-only">Change l'apparance</span>
        <ColorScheme placeholder="...">
            <IMoon class="h-5" v-if="colorMode.preference === 'dark'" />
            <ISun class="h-5" v-else-if="colorMode.preference === 'light'" />
            <IComputer class="h-5" v-else />
        </ColorScheme>
    </button>
</template>

<script lang="ts" setup>
import IMoon from '@/assets/svg/moon.svg?component';
import ISun from '@/assets/svg/sun.svg?component';
import IComputer from '@/assets/svg/computer.svg?component';
const colorMode = useColorMode();

const onClick = () => {
    const values = ['system', 'light', 'dark'];
    const index = values.indexOf(colorMode.preference);
    const next = (index + 1) % values.length;
    colorMode.preference = values[next];
};
</script>
