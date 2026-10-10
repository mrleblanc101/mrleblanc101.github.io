<template>
    <section :id="id">
        <div class="flex items-baseline justify-between gap-4 mb-4">
            <h2 class="font-marvin uppercase text-3xl md:text-5xl tracking-wide">{{ title }}</h2>
            <NuxtLink
                v-if="link"
                :to="link"
                class="inline-flex shrink-0 gap-1 font-bold text-zinc-900 dark:text-white hover:opacity-70 transition"
            >
                Voir tout <IArrowRight class="w-5" />
            </NuxtLink>
        </div>
        <ProjectGrid :projects="projects" />
    </section>
</template>

<script lang="ts" setup>
import IArrowRight from '@/assets/svg/arrow-right.svg?component';

defineProps<{
    title: string;
    projects: { id: string; stem: string }[];
    id?: string;
    // Shows a "Voir tout" link next to the title
    link?: string;
}>();
</script>
