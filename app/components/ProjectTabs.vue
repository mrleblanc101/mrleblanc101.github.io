<template>
    <nav aria-label="Catégories de projets">
        <ul class="flex flex-wrap gap-2">
            <li v-for="tab in tabs">
                <NuxtLink
                    :to="tab.to"
                    class="block rounded-full bg-zinc-200 px-4 py-2 text-xs font-bold whitespace-nowrap uppercase transition hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"
                    exact-active-class="bg-zinc-900! text-white dark:bg-white! dark:text-zinc-950"
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
