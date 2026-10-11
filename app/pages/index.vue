<template>
    <div>
        <section class="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
            <div
                class="flex flex-col sm:flex-row sm:items-center sm:gap-10 lg:gap-24 relative justify-center max-w-(--breakpoint-2xl) mx-auto p-4 lg:px-8 z-0"
            >
                <div class="sm:min-w-0">
                    <p class="text-lg md:text-2xl font-black text-zinc-600 dark:text-zinc-400 mb-2 md:mb-4">
                        Bonjour, je suis
                    </p>
                    <h1
                        class="font-marvin text-black dark:text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[0.9] tracking-wide"
                    >
                        <span class="sr-only">Bonjour, je suis</span>
                        Sébastien<br />
                        LeBlanc
                    </h1>
                    <div class="max-w-[200px] sm:max-w-70 md:max-w-90 md:text-xl leading-6 md:leading-7 mt-4 md:mt-8 lg:mb-0">
                        Un développeur Front-End qui conçoit des produits numériques depuis 2017.
                    </div>
                    <SocialLinks class="absolute sm:static inline-flex gap-5 my-6" icon-class="w-9" />
                </div>
                <ProfileBlob
                    class="relative -z-10 ml-auto sm:ml-0 -mt-[clamp(50px,calc(26vw_-_48px),120px)] sm:mt-0 w-[max(200px,calc(69vw_-_59px))] sm:w-[44vw] sm:shrink-0 md:w-[clamp(360px,45vw,600px)] md:py-4"
                    alt="Photo de Sébastien LeBlanc"
                />
            </div>
        </section>
        <section v-if="appConfig.blog" class="max-w-(--breakpoint-2xl) w-full mx-auto px-4 my-10 lg:my-16 lg:px-8">
            <h2 class="font-marvin text-black dark:text-white uppercase text-3xl md:text-5xl mb-4 tracking-wide">
                <NuxtLink to="/blog" class="inline-flex items-baseline group">
                    Blog
                    <IArrowRight
                        class="h-6 transition opacity-0 group-hover:opacity-100 text-zinc-500 group-hover:translate-x-2.5 duration-300"
                    />
                </NuxtLink>
            </h2>
            <ul class="flex flex-col gap-4">
                <Post v-for="(post, i) in posts" :post="post" :index="i" is_home />
            </ul>
        </section>
        <section class="max-w-(--breakpoint-2xl) w-full mx-auto px-4 my-10 lg:my-16 lg:px-8">
            <h2 class="font-marvin text-black dark:text-white uppercase text-3xl md:text-5xl mb-2 md:mb-4 tracking-wide">Projets</h2>
            <div class="flex flex-col gap-10 md:gap-16">
                <ProjectCategory
                    v-for="section in sections"
                    :title="section.title"
                    :projects="section.projects"
                    :count="section.count"
                    heading="h3"
                    :limit="2"
                    :link="`/projets/${section.slug}`"
                />
                <NuxtLink
                    to="/projets"
                    class="group self-center inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl font-bold rounded-sm shadow-sm transition bg-zinc-900 text-white hover:bg-zinc-700 active:bg-zinc-950 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white dark:active:bg-zinc-300 focus:outline-hidden focus-visible:ring-3 ring-zinc-400 dark:ring-zinc-500"
                >
                    Voir tous les projets
                    <IArrow class="w-5 md:w-6 transition-transform motion-safe:group-hover:translate-x-1" />
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
