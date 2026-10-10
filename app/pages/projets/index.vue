<template>
    <div class="max-w-(--breakpoint-xl) w-full mx-auto px-4 my-6 lg:my-16 lg:px-8 flex flex-col gap-16">
        <div>
            <h1 class="font-marvin text-black dark:text-white uppercase text-3xl md:text-5xl mb-4 tracking-wide">Projets</h1>
            <ProjectTabs />
        </div>
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
