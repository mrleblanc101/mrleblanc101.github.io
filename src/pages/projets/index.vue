<template>
    <section class="max-w-screen-xl w-full mx-auto px-4 my-16 lg:px-8">
        <h1 class="font-marvin font-black uppercase text-5xl mb-4 tracking-wide sr-only">Projets</h1>
        <h2 class="font-marvin font-black uppercase text-5xl mb-4 tracking-wide">Libeo</h2>
        <p></p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Project v-for="projet in libeo_projects" :project="projet" />
        </ul>
        <h2 class="font-marvin font-black uppercase text-5xl mb-4 tracking-wide mt-16">Personnels</h2>
        <p></p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Project v-for="projet in personnal_projects" :project="projet" />
        </ul>
    </section>
</template>

<script lang="ts" setup>
const { data: libeo_projects } = await useAsyncData('libeo_projects', () =>
    queryContent('/projets')
        .where({ group: { $exists: false } })
        .find(),
);
const { data: personnal_projects } = await useAsyncData('personnal_projects', () =>
    queryContent('/projets')
        .where({ group: { $eq: 'perso' } })
        .find(),
);
</script>
