<template>
    <div>
        <section class="bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
            <div class="flex flex-col relative justify-center max-w-screen-xl mx-auto p-4 lg:px-8 z-0">
                <div class="md:-mt-24 md:absolute lg:mt-0">
                    <h1
                        class="font-marvin font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[1] tracking-wide"
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
                <NuxtPicture
                    class="max-h-full relative -z-10 ml-auto -mb-4 w-1/2 max-w-md md:max-w-none object-contain object-right-bottom pt-8 min-w-[250px]"
                    src="/img/profil.png"
                    alt="Photo de Sébastien LeBlanc"
                    width="1537"
                    height="2057"
                    quality="80"
                    sizes="sm:250px md:50vw lg:50vw xl:608px"
                />
            </div>
        </section>
        <section class="max-w-screen-xl w-full mx-auto px-4 my-6 lg:my-16 lg:px-8">
            <h2 class="font-marvin font-black uppercase text-3xl md:text-5xl mb-4 tracking-wide">
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
        <section class="max-w-screen-xl w-full mx-auto px-4 my-6 lg:my-16 lg:px-8">
            <h2 class="font-marvin font-black uppercase text-3xl md:text-5xl mb-4 tracking-wide">
                <NuxtLink to="/blog" class="inline-flex items-baseline group">
                    Projets
                    <IArrowRight
                        class="h-6 transition opacity-0 group-hover:opacity-100 text-zinc-500 group-hover:translate-x-2.5 duration-300"
                    />
                </NuxtLink>
            </h2>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Project v-for="projet in projects" :project="projet" />
            </ul>
        </section>
    </div>
</template>

<script lang="ts" setup>
import IGithub from '@/assets/svg/github.svg?component';
import ILinkedIn from '@/assets/svg/linkedin.svg?component';
import IArrowRight from '@/assets/svg/chevron-right.svg?component';

const { data: projects } = await useAsyncData('projets', () =>
    queryContent('/projets')
        .limit(4)
        .sort({
            order: -1,
            $numeric: true,
        })
        .find(),
);

const { data: posts } = await useAsyncData('posts', () =>
    queryContent('/blog')
        .sort({
            createdAt: -1,
            pinned: 1,
            $numeric: true,
        })
        .limit(3)
        .find(),
);
</script>
