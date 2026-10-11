<template>
    <div>
        <section class="border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <div
                class="relative z-0 mx-auto flex max-w-(--breakpoint-2xl) flex-col justify-center p-4 sm:flex-row sm:items-center sm:gap-10 lg:gap-24 lg:px-8"
            >
                <div class="sm:min-w-0">
                    <p class="mb-2 text-lg font-black text-zinc-600 md:mb-4 md:text-2xl dark:text-zinc-400">
                        Bonjour, je suis
                    </p>
                    <h1
                        class="font-marvin text-4xl leading-[0.9] tracking-wide text-black uppercase sm:text-6xl md:text-7xl lg:text-8xl dark:text-white"
                    >
                        <span class="sr-only">Bonjour, je suis</span>
                        Sébastien<br />
                        LeBlanc
                    </h1>
                    <div
                        class="mt-4 max-w-[200px] leading-6 sm:max-w-70 md:mt-8 md:max-w-90 md:text-xl md:leading-7 lg:mb-0"
                    >
                        Un développeur Front-End qui conçoit des produits numériques depuis 2017.
                    </div>
                    <SocialLinks class="absolute my-6 inline-flex gap-5 sm:static" icon-class="w-9" />
                </div>
                <ProfileBlob
                    class="relative -z-10 -mt-[clamp(50px,calc(26vw_-_48px),120px)] ml-auto w-[max(200px,calc(69vw_-_59px))] sm:mt-0 sm:ml-0 sm:w-[44vw] sm:shrink-0 md:w-[clamp(360px,45vw,600px)] md:py-4"
                    alt="Photo de Sébastien LeBlanc"
                />
            </div>
        </section>
        <section v-if="appConfig.blog" class="mx-auto my-10 w-full max-w-(--breakpoint-2xl) px-4 lg:my-16 lg:px-8">
            <h2 class="mb-4 font-marvin text-3xl tracking-wide text-black uppercase md:text-5xl dark:text-white">
                <NuxtLink to="/blog" class="group inline-flex items-baseline">
                    Blog
                    <IArrowRight
                        class="h-6 text-zinc-500 opacity-0 transition duration-300 group-hover:translate-x-2.5 group-hover:opacity-100"
                    />
                </NuxtLink>
            </h2>
            <ul class="flex flex-col gap-4">
                <Post v-for="(post, i) in posts" :key="post.path" :post="post" :index="i" is-home />
            </ul>
        </section>
        <section class="mx-auto my-10 w-full max-w-(--breakpoint-2xl) px-4 lg:my-16 lg:px-8">
            <h2
                class="mb-2 font-marvin text-3xl tracking-wide text-black uppercase md:mb-4 md:text-5xl dark:text-white"
            >
                Projets
            </h2>
            <div class="flex flex-col gap-10 md:gap-16">
                <ProjectCategory
                    v-for="section in sections"
                    :key="section.slug"
                    :title="section.title"
                    :projects="section.projects"
                    :count="section.count"
                    heading="h3"
                    :limit="2"
                    :link="`/projets/${section.slug}`"
                />
                <NuxtLink
                    to="/projets"
                    class="group inline-flex items-center gap-2 self-center rounded-sm bg-zinc-900 px-6 py-3 text-lg font-bold text-white shadow-sm ring-zinc-400 transition hover:bg-zinc-700 focus:outline-hidden focus-visible:ring-3 active:bg-zinc-950 md:px-8 md:py-4 md:text-xl dark:bg-zinc-100 dark:text-zinc-900 dark:ring-zinc-500 dark:hover:bg-white dark:active:bg-zinc-300"
                >
                    Voir tous les projets
                    <IArrow class="w-5 transition-transform motion-safe:group-hover:translate-x-1 md:w-6" />
                </NuxtLink>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
import IArrowRight from '@/assets/svg/chevron-right.svg?component';
import IArrow from '@/assets/svg/arrow-right.svg?component';

const appConfig = useAppConfig();

const { data: projects } = await useProjects();
const sections = computed(() =>
    projectCategories.map((category) => {
        const all = (projects.value ?? []).filter((p) => projectCategory(p) === category.slug);
        return { ...category, projects: all.slice(0, 3), count: all.length };
    }),
);

const { data: posts } = await useAsyncData('posts', () =>
    queryCollection('blog').order('createdAt', 'DESC').order('pinned', 'ASC').limit(3).all(),
);
</script>
