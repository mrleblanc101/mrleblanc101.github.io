<template>
    <section :id="id">
        <div class="mb-3 flex items-end justify-between gap-4 sm:items-baseline">
            <component
                :is="heading ?? 'h2'"
                class="text-2xl leading-tight font-semibold text-zinc-900 md:text-3xl dark:text-white"
            >
                {{ title }}
                <!-- Own line on mobile, after the title from sm up -->
                <span
                    class="mt-1 block text-base font-normal whitespace-nowrap text-zinc-500 sm:mt-0 sm:inline md:text-lg"
                >
                    <span class="hidden sm:inline">·</span> {{ total }} projet{{ total > 1 ? 's' : '' }}
                </span>
            </component>
            <NuxtLink
                v-if="link"
                :to="link"
                class="group inline-flex shrink-0 items-center gap-1 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 md:text-base dark:text-zinc-400 dark:hover:text-white"
            >
                Voir tout
                <IArrowRight class="w-4 transition-transform motion-safe:group-hover:translate-x-1" />
            </NuxtLink>
        </div>
        <ProjectGrid :projects="projects" :limit="limit" :heading="heading === 'h3' ? 'h4' : 'h3'" />
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
    // h3 when the section is nested under another heading (home page)
    heading?: 'h2' | 'h3';
    // Number of projects shown below lg (see ProjectGrid)
    limit?: number;
}>();

const total = computed(() => props.count ?? props.projects.length);
</script>
