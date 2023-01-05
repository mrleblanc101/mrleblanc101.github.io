<template>
    <main class="grow w-full">
        <section class="bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
            <div class="flex flex-col relative lg:min-h-[75vh] justify-center max-w-screen-xl mx-auto p-4 lg:px-8 z-0">
                <div>
                    <h1
                        class="font-marvin text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-black uppercase leading-[1]"
                    >
                        Développeur<br />
                        Front-end
                    </h1>
                    <div class="max-w-[480px] text-xl leading-6 sm:leading-8 my-8 lg:mb-0">
                        Bonjour, je suis Sébastien LeBlanc ! <br />
                        Je conçois des produits numériques depuis 2017.
                    </div>
                </div>
                <img
                    class="max-h-full relative -z-10 ml-auto -mb-4 lg:m-0 lg:absolute lg:bottom-0 lg:right-4 lg:w-1/2 max-w-[75%] lg:max-w-none object-contain object-right-bottom"
                    src="@/assets/img/profil-2.png"
                    alt=""
                />
            </div>
        </section>
        <section class="max-w-screen-xl mx-auto px-4 my-16 lg:px-8">
            <h2 class="font-marvin text-4xl mb-4">Réalisations récentes</h2>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li
                    class="relative after:content-[''] after:absolute after:top-[38%] after:bottom-0 after:w-full after:bg-gradient-to-t after:from-black after:to-transparent z-10"
                    v-for="realisation in realisations"
                >
                    <a :href="realisation.url" target="_blank">
                        <img :src="`${realisation._path}/thumbnail.jpg`" />
                        <div class="absolute p-6 bottom-0 left-0 w-full z-50">
                            <img :src="`${realisation._path}/logo.svg`" />
                        </div>
                        <div hidden class="absolute">{{ realisation.title }}</div>
                    </a>
                </li>
            </ul>
        </section>
        <section class="max-w-screen-xl mx-auto px-4 my-16 lg:px-8">
            <h2 class="font-marvin text-4xl mb-4">Articles récents</h2>
            <ul>
                <li v-for="article in articles">
                    <nuxt-link class="hover:underline" :to="article._path">{{ article.title }}</nuxt-link>
                </li>
            </ul>
        </section>
    </main>
</template>

<script lang="ts" setup>
const { data: articles } = await useAsyncData('articles', () => queryContent('/blog').find());
const { data: realisations } = await useAsyncData('realisations', () => queryContent('/realisations').find());
</script>

<style lang="postcss" scoped></style>
