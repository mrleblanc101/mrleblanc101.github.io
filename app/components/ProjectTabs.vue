<template>
    <nav aria-label="Catégories de projets">
        <ul class="flex flex-wrap gap-2">
            <li v-for="tab in tabs">
                <NuxtLink
                    :to="tab.to"
                    class="block px-4 py-2 font-medium text-xs uppercase rounded-full whitespace-nowrap transition bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600"
                    exact-active-class="bg-zinc-900! text-white dark:bg-white! dark:text-zinc-900"
                >
                    {{ tab.title }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
const tabs = [
    { title: 'Tous', to: '/projets' },
    ...projectCategories.map((category) => ({ title: category.title, to: `/projets/${category.slug}` })),
];
</script>
