<template>
    <div class="flex flex-col gap-10 md:gap-16">
        <ProjectCategory
            v-for="section in sections"
            :id="section.slug"
            :title="section.title"
            :projects="section.projects"
        />
    </div>
</template>

<script lang="ts" setup>
const { data: projects } = await useProjects();

const sections = computed(() =>
    projectCategories.map((category) => ({
        ...category,
        projects: (projects.value ?? []).filter((p) => projectCategory(p) === category.slug),
    })),
);
</script>
