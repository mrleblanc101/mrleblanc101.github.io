<template>
    <section :id="id">
        <div class="flex items-baseline justify-between gap-4 mb-3">
            <h2 class="font-semibold text-2xl md:text-3xl leading-tight text-zinc-900 dark:text-white">
                {{ title }}
                <!-- Own line on mobile, after the title from sm up -->
                <span
                    class="block sm:inline mt-1 sm:mt-0 font-normal text-base md:text-lg text-zinc-500 whitespace-nowrap"
                >
                    <span class="hidden sm:inline">·</span> {{ total }} projet{{ total > 1 ? 's' : '' }}
                </span>
            </h2>
            <NuxtLink
                v-if="link"
                :to="link"
                class="group inline-flex shrink-0 items-center gap-1 text-sm md:text-base font-medium transition-colors text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
            >
                Voir tout
                <IArrowRight class="w-4 transition-transform motion-safe:group-hover:translate-x-1" />
            </NuxtLink>
        </div>
        <ProjectGrid :projects="projects" />
    </section>
</template>

<script lang="ts" setup>
import IArrowRight from '@/assets/svg/arrow-right.svg?component';

const props = defineProps<{
    title: string;
    projects: { id: string; stem: string }[];
    id?: string;
    // Shows a "Voir tout" link next to the title
    link?: string;
    // Number of projects in the category, when only some of them are shown
    count?: number;
}>();

const total = computed(() => props.count ?? props.projects.length);
</script>
