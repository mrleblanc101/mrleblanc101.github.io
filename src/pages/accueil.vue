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
            <h2 class="font-marvin text-4xl">Réalisations récentes</h2>
            <ul>
                <li v-for="realisation in realisations">
                    <nuxt-link class="hover:underline" :to="realisation._path">{{ realisation.title }}</nuxt-link>
                </li>
            </ul>
        </section>
        <section class="max-w-screen-xl mx-auto px-4 my-16 lg:px-8">
            <h2 class="font-marvin text-4xl">Articles récents</h2>
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
