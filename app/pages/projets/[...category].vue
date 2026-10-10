<template>
    <ProjectGrid :projects="projects ?? []" heading="h2" />
</template>

<script lang="ts" setup>
const route = useRoute();
const [slug, ...rest] = ([] as string[]).concat(route.params.category ?? []);

const category = projectCategories.find((c) => c.slug === slug);
if (!category || rest.length) throw createError({ statusCode: 404, message: 'Catégorie introuvable', fatal: true });

// The grid sits directly under the page h1, so project titles are h2
const { data: projects } = await useProjects(category.slug);
</script>
