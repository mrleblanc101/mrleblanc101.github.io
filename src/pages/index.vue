<template>
    <section class="bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
        <div class="flex flex-col relative justify-center max-w-screen-xl mx-auto p-4 lg:px-8 z-0">
            <div class="md:-mt-24 md:absolute lg:mt-0">
                <h1
                    class="font-marvin font-black text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] uppercase leading-[1]"
                >
                    Développeur<br />
                    Front-end
                </h1>
                <div class="max-w-[480px] text-xl leading-7 mt-8 lg:mb-0">
                    Bonjour, je suis Sébastien LeBlanc ! <br />
                    Je conçois des produits numériques depuis 2017.
                </div>
                <div class="absolute md:static inline-flex gap-5 my-6">
                    <a class="hover:opacity-70 transition" href="https://github.com/mrleblanc101" target="_blank">
                        <IGithub class="w-9" />
                    </a>
                    <a
                        class="hover:opacity-70 transition"
                        href="https://www.linkedin.com/in/s-leblanc/"
                        target="_blank"
                    >
                        <ILinkedIn class="w-9" />
                    </a>
                </div>
            </div>
            <img
                class="max-h-full relative -z-10 ml-auto -mb-4 w-1/2 max-w-md md:max-w-none object-contain object-right-bottom pt-8 min-w-[250px]"
                src="@/assets/img/profil-2.png"
                alt=""
                width="1537"
                height="2057"
            />
        </div>
    </section>
    <section class="max-w-screen-xl w-full mx-auto px-4 my-16 lg:px-8">
        <h2 class="font-marvin font-black uppercase text-5xl mb-4 tracking-wide">Projets récents</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Project v-for="projet in projects" :project="projet" />
        </ul>
        <div class="text-center">
            <nuxt-link
                to="/projets"
                class="shadow bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 inline-flex items-center justify-center h-9 px-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none gap-2 mt-8 font-marvin font-black uppercase tracking-wider transition"
            >
                Voir tous les projets
            </nuxt-link>
        </div>
    </section>
    <section class="max-w-screen-xl w-full mx-auto px-4 my-16 lg:px-8">
        <h2 class="font-marvin font-black uppercase text-5xl mb-4 tracking-wide">Articles récents</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 -mx-10">
            <Post v-for="(post, i) in posts" :post="post" :index="i" />
        </ul>
        <div class="text-center">
            <nuxt-link
                to="/blog"
                class="shadow bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 inline-flex items-center justify-center h-9 px-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none gap-2 mt-8 font-marvin font-black uppercase tracking-wider transition"
            >
                Voir tous les articles
            </nuxt-link>
        </div>
    </section>
</template>

<script lang="ts" setup>
import IGithub from '@/assets/svg/github.svg?component';
import ILinkedIn from '@/assets/svg/linkedin.svg?component';

const { data: posts } = await useAsyncData('posts', () => queryContent('/blog').limit(3).find());
const { data: projects } = await useAsyncData('projets', () => queryContent('/projets').limit(4).find());
</script>

<style lang="postcss" scoped></style>
