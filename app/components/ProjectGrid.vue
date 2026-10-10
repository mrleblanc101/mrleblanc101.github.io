<template>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Project v-for="(projet, i) in projects" :key="projet.id" :project="projet" :index="i" />
    </ul>
</template>

<script lang="ts" setup>
defineProps<{ projects: { id: string; stem: string }[] }>();
</script>
