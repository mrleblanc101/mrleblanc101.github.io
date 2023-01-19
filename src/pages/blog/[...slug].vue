<template>
    <ContentDoc tag="article" v-slot="{ doc }">
        <div class="bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
            <div class="max-w-screen-xl mx-auto p-4 lg:px-8 lg:py-16 z-0">
                <h1
                    class="text-4xl leading-[1.1111111] font-extrabold text-black dark:text-white lg:leading-none lg:text-[3.5rem]"
                >
                    {{ doc.title }}
                </h1>
                <div class="text-lg mt-3 opacity-70">
                    <span>{{ formatDate(doc.createdAt) }}</span> ·
                    <span :data-minutes="doc.readingTime.minutes"
                        >{{ formatDuration(doc.readingTime.minutes) }} minutes</span
                    >
                </div>
            </div>
        </div>
        <div class="max-w-screen-xl mx-auto px-4 py-8 lg:px-8 lg:py-16 z-0">
            <ContentRenderer class="prose prose-xl dark:prose-invert" :value="doc" />
            <div class="flex flex-col md:flex-row gap-4 mt-8 md:mt-16">
                <NuxtLink
                    class="md:mr-auto p-6 bg-zinc-100 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition w-full md:max-w-sm"
                    v-if="prev"
                    :to="prev._path"
                >
                    <div class="opacity-70 font-medium">Précédent</div>
                    <div class="font-black text-xl">{{ prev.title }}</div>
                </NuxtLink>
                <NuxtLink
                    class="md:ml-auto p-6 bg-zinc-100 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition w-full md:max-w-sm"
                    v-if="next"
                    :to="next._path"
                >
                    <div class="opacity-70 font-medium">Suivant</div>
                    <div class="font-black text-xl">{{ next.title }}</div>
                </NuxtLink>
            </div>
            <ClientOnly>
                <Disqus class="mt-8" shortname="mrleblanc101" />
            </ClientOnly>
        </div>
    </ContentDoc>
</template>

<script lang="ts" setup>
const route = useRoute();

const { data: prevNext } = await useAsyncData('projets', () => queryContent('/blog').findSurround(route.fullPath));
const [prev, next] = prevNext.value || [];

function formatDate(date: Date) {
    return new Date(date).toLocaleDateString('fr', { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' });
}
function formatDuration(minutes: number) {
    return Math.ceil(minutes);
}
</script>
