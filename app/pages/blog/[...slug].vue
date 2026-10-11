<template>
    <div>
        <article v-if="doc">
            <!-- <div class="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800"> -->
            <Teleport to=".header-inner">
                <div class="z-0 mx-auto max-w-(--breakpoint-2xl) p-4 lg:px-8 lg:py-16">
                    <h1
                        class="text-4xl leading-[1.1111111] font-extrabold text-black lg:text-[3.5rem] lg:leading-none dark:text-white"
                    >
                        {{ doc.title }}
                    </h1>
                    <div class="mt-3 text-lg opacity-70">
                        <span>{{ formatDate(doc.createdAt) }}</span> ·
                        <span :data-minutes="doc.readingTime.minutes"
                            >{{ formatDuration(doc.readingTime.minutes) }} minutes</span
                        >
                    </div>
                </div>
            </Teleport>

            <!-- </div> -->
            <div class="z-0 mx-auto max-w-(--breakpoint-2xl) px-4 py-8 lg:px-8 lg:py-16">
                <ContentRenderer class="prose prose-xl dark:prose-invert" :value="doc" />
                <div class="mt-8 flex flex-col gap-4 md:mt-16 md:flex-row">
                    <NuxtLink
                        v-if="prev"
                        class="w-full rounded-sm border border-zinc-200 bg-zinc-100 p-6 transition hover:bg-zinc-200 md:mr-auto md:max-w-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                        :to="prev.path"
                    >
                        <div class="font-medium opacity-70">Précédent</div>
                        <div class="text-xl font-bold">{{ prev.title }}</div>
                    </NuxtLink>
                    <NuxtLink
                        v-if="next"
                        class="w-full rounded-sm border border-zinc-200 bg-zinc-100 p-6 transition hover:bg-zinc-200 md:ml-auto md:max-w-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                        :to="next.path"
                    >
                        <div class="font-medium opacity-70">Suivant</div>
                        <div class="text-xl font-bold">{{ next.title }}</div>
                    </NuxtLink>
                </div>
                <ClientOnly>
                    <!-- Disqus reads these to pick its theme and can't parse Tailwind's oklch() colors: same colors as the page, in hex -->
                    <Disqus
                        :key="colorMode.value"
                        class="mt-8 bg-white text-[#364153] dark:bg-[#09090b] dark:text-[#d1d5dc]"
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
