<template>
    <div>
        <article v-if="doc">
            <!-- <div class="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800"> -->
            <Teleport to=".header-inner">
                <div class="max-w-(--breakpoint-xl) mx-auto p-4 lg:px-8 lg:py-16 z-0">
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
            </Teleport>

            <!-- </div> -->
            <div class="max-w-(--breakpoint-xl) mx-auto px-4 py-8 lg:px-8 lg:py-16 z-0">
                <ContentRenderer class="prose prose-xl dark:prose-invert" :value="doc" />
                <div class="flex flex-col md:flex-row gap-4 mt-8 md:mt-16">
                    <NuxtLink
                        class="md:mr-auto p-6 bg-zinc-100 border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-sm transition w-full md:max-w-sm"
                        v-if="prev"
                        :to="prev.path"
                    >
                        <div class="opacity-70 font-medium">Précédent</div>
                        <div class="font-black text-xl">{{ prev.title }}</div>
                    </NuxtLink>
                    <NuxtLink
                        class="md:ml-auto p-6 bg-zinc-100 border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-sm transition w-full md:max-w-sm"
                        v-if="next"
                        :to="next.path"
                    >
                        <div class="opacity-70 font-medium">Suivant</div>
                        <div class="font-black text-xl">{{ next.title }}</div>
                    </NuxtLink>
                </div>
                <ClientOnly>
                    <!-- Disqus reads these to pick its theme and can't parse Tailwind's oklch() colors: same colors as the page, in hex -->
                    <Disqus
                        class="mt-8 text-[#364153] bg-white dark:text-[#d1d5dc] dark:bg-[#09090b]"
                        :key="colorMode.value"
                    />
                </ClientOnly>
            </div>
        </article>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({ middleware: 'blog' });

const route = useRoute();
const colorMode = useColorMode();

const { data: doc } = await useAsyncData(`blog-${route.path}`, () => queryCollection('blog').path(route.path).first());
if (!doc.value) throw createError({ statusCode: 404, message: 'Article introuvable', fatal: true });

const { data: prevNext } = await useAsyncData(`surround-${route.path}`, () =>
    queryCollectionItemSurroundings('blog', route.path, { fields: ['title'] }),
);
const [prev, next] = prevNext.value || [];

function formatDate(date: Date) {
    return new Date(date).toLocaleDateString('fr', { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' });
}
function formatDuration(minutes: number) {
    return Math.ceil(minutes);
}
</script>
