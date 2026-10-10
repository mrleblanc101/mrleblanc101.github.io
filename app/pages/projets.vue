<template>
    <div class="max-w-(--breakpoint-2xl) w-full mx-auto px-4 my-6 lg:my-16 lg:px-8 flex flex-col gap-10 md:gap-16">
        <div>
            <h1 class="font-marvin text-black dark:text-white uppercase text-3xl md:text-5xl mb-4 tracking-wide">
                Projets<span v-if="category" class="sr-only"> : {{ category.title }}</span>
            </h1>
            <ProjectTabs />
        </div>
        <!-- Only the list below the tabs transitions when changing tab -->
        <NuxtPage />
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const category = computed(() =>
    projectCategories.find((c) => c.slug === ([] as string[]).concat(route.params.category ?? [])[0]),
);
</script>
