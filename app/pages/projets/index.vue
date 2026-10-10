<template>
    <section class="max-w-(--breakpoint-xl) w-full mx-auto px-4 my-6 lg:my-16 lg:px-8">
        <h1 class="font-marvin uppercase text-3xl md:text-5xl mb-4 tracking-wide sr-only">Projets</h1>
        <h2 class="font-marvin uppercase text-3xl md:text-5xl mb-4 tracking-wide">Libéo</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Project v-for="(projet, i) in libeo_projects" :project="projet" :index="i" />
        </ul>
        <h2 class="font-marvin uppercase text-3xl md:text-5xl mb-4 tracking-wide mt-16">Personnels</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Project v-for="projet in personnal_projects" :project="projet" />
        </ul>
    </section>
</template>

<script lang="ts" setup>
const { data: libeo_projects } = await useAsyncData('libeo_projects', () =>
    queryCollection('projets').where('stem', 'LIKE', 'projets/libeo/%').order('order', 'DESC').all(),
);
const { data: personnal_projects } = await useAsyncData('personnal_projects', () =>
    queryCollection('projets').where('stem', 'LIKE', 'projets/personnels/%').order('order', 'DESC').all(),
);
</script>
