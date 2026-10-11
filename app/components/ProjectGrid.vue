<template>
    <ul class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Project
            v-for="(projet, i) in projects"
            :key="projet.id"
            :class="{ 'max-lg:hidden': limit && i >= limit }"
            :project="projet"
            :index="i"
            :heading="heading"
        />
    </ul>
</template>

<script lang="ts" setup>
defineProps<{
    projects: { id: string; stem: string }[];
    // Level of the project titles (visually hidden)
    heading: 'h2' | 'h3' | 'h4';
    // Hides the projects past this many below lg (1 or 2 columns), so no row is left incomplete
    limit?: number;
}>();
</script>
