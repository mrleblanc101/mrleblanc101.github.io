<template>
    <button
        type="button"
        class="flex-shrink-0 shadow rounded focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white inline-flex items-center justify-center font-bold h-10 w-10 text-sm transition"
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
