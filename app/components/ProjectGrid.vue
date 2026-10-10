<template>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Project
            v-for="(projet, i) in projects"
            :key="projet.id"
            :class="{ 'max-lg:hidden': limit && i >= limit }"
            :project="projet"
            :index="i"
        />
    </ul>
</template>

<script lang="ts" setup>
defineProps<{
    projects: { id: string; stem: string }[];
    // Hides the projects past this many below lg (1 or 2 columns), so no row is left incomplete
    limit?: number;
}>();
</script>
