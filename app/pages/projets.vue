<template>
    <div class="mx-auto my-6 flex w-full max-w-(--breakpoint-2xl) flex-col gap-10 px-4 md:gap-16 lg:my-16 lg:px-8">
        <div>
            <h1 class="mb-4 font-marvin text-3xl tracking-wide text-black uppercase md:text-5xl dark:text-white">
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
