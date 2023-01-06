<template>
    <section class="max-w-screen-xl w-full mx-auto px-4 my-16 lg:px-8">
        <h1 class="font-marvin font-black uppercase text-5xl mb-4 tracking-wide">Projets</h1>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Project v-for="projet in projects" :project="projet" />
        </ul>
    </section>
</template>

<script lang="ts" setup>
const { data: projects } = await useAsyncData('projets', () => queryContent('/projets').find());
</script>
