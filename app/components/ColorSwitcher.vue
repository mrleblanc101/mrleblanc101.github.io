<template>
    <button
        type="button"
        class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm text-zinc-600 ring-zinc-400 transition hover:text-zinc-950 focus:outline-hidden focus-visible:ring-3 dark:text-zinc-400 dark:ring-zinc-500 dark:hover:text-white"
        @click="onClick"
    >
        <span class="sr-only">Changer l'apparence</span>
        <ColorScheme placeholder="...">
            <IMoon v-if="colorMode.preference === 'dark'" class="h-5" />
            <ISun v-else-if="colorMode.preference === 'light'" class="h-5" />
            <IComputer v-else class="h-5" />
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
