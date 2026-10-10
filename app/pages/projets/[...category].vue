<template>
    <div class="max-w-(--breakpoint-xl) w-full mx-auto px-4 my-6 lg:my-16 lg:px-8 flex flex-col gap-16">
        <div>
            <h1 class="sr-only">Projets : {{ category.title }}</h1>
            <ProjectTabs />
        </div>
        <ProjectGrid :projects="projects ?? []" />
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const [slug, ...rest] = ([] as string[]).concat(route.params.category ?? []);

const category = projectCategories.find((c) => c.slug === slug);
if (!category || rest.length) throw createError({ statusCode: 404, message: 'Catégorie introuvable', fatal: true });

const { data: projects } = await useProjects(category.slug);
</script>
