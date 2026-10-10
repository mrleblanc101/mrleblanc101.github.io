<template>
    <div>
        <section class="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
            <div class="flex flex-col relative justify-center max-w-(--breakpoint-xl) mx-auto p-4 lg:px-8 z-0">
                <div class="md:-mt-24 md:absolute lg:mt-0">
                    <h1
                        class="font-marvin text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-none tracking-wide"
                    >
                        Sébastien<br />
                        LeBlanc
                    </h1>
                    <div class="max-w-[480px] md:text-xl leading-6 md:leading-7 mt-8 lg:mb-0">
                        Bonjour, je suis développeur Front-End !<br />
                        Je conçois des produits numériques depuis 2017.
                    </div>
                    <div class="absolute md:static inline-flex gap-5 my-6">
                        <a class="hover:opacity-70 transition" href="https://github.com/mrleblanc101" target="_blank">
                            <IGithub class="w-9" />
                            <span class="sr-only">Profil Github</span>
                        </a>
                        <a
                            class="hover:opacity-70 transition"
                            href="https://www.linkedin.com/in/s-leblanc/"
                            target="_blank"
                        >
                            <ILinkedIn class="w-9" />
                            <span class="sr-only">Profil LinkedIn</span>
                        </a>
                    </div>
                </div>
                <ProfileBlob
                    class="relative -z-10 ml-auto w-1/2 max-w-md md:max-w-none pt-8 min-w-[250px]"
                    alt="Photo de Sébastien LeBlanc"
                />
            </div>
        </section>
        <section v-if="appConfig.blog" class="max-w-(--breakpoint-xl) w-full mx-auto px-4 my-6 lg:my-16 lg:px-8">
            <h2 class="font-marvin uppercase text-3xl md:text-5xl mb-4 tracking-wide">
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
        <div class="max-w-(--breakpoint-xl) w-full mx-auto px-4 my-6 lg:my-16 lg:px-8 flex flex-col gap-16">
            <ProjectCategory
                v-for="section in sections"
                :title="section.title"
                :projects="section.projects"
                :link="`/projets/${section.slug}`"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import IGithub from '@/assets/svg/github.svg?component';
import ILinkedIn from '@/assets/svg/linkedin.svg?component';
import IArrowRight from '@/assets/svg/chevron-right.svg?component';

const appConfig = useAppConfig();

const { data: projects } = await useProjects();
const sections = computed(() =>
    projectCategories.map((category) => ({
        ...category,
        projects: (projects.value ?? []).filter((p) => projectCategory(p) === category.slug).slice(0, 4),
    })),
);

const { data: posts } = await useAsyncData('posts', () =>
    queryCollection('blog').order('createdAt', 'DESC').order('pinned', 'ASC').limit(3).all(),
);
</script>
