<template>
    <div class="max-w-(--breakpoint-2xl) w-full mx-auto px-4 my-6 lg:my-16 lg:px-8 flex flex-col gap-10 md:gap-16">
        <div class="max-w-3xl">
            <h1 class="font-marvin text-black dark:text-white uppercase text-3xl md:text-5xl mb-4 tracking-wide">
                À propos
            </h1>
            <p class="text-lg md:text-xl leading-relaxed">
                Je suis Sébastien, développeur Front-End à Québec. Je conçois des interfaces avec Vue.js et Nuxt, et je
                touche aussi au back-end avec Laravel quand le projet le demande. En dehors du travail, je donne de mon
                temps à la communauté web de Québec et aux outils open-source que j'utilise tous les jours.
            </p>
        </div>

        <section v-for="group in timeline">
            <h2 class="font-semibold text-2xl md:text-3xl leading-tight text-zinc-900 dark:text-white mb-4">
                {{ group.title }}
            </h2>
            <ol class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <li
                    v-for="step in group.steps"
                    class="flex flex-col gap-2 p-5 md:p-6 rounded-xl bg-zinc-100 dark:bg-zinc-900"
                >
                    <p class="text-sm font-medium uppercase tracking-wide text-zinc-500">{{ step.period }}</p>
                    <h3 class="font-semibold text-xl text-zinc-900 dark:text-white">{{ step.place }}</h3>
                    <p class="font-medium text-zinc-600 dark:text-zinc-400">{{ step.title }}</p>
                    <p v-if="step.description">{{ step.description }}</p>
                </li>
            </ol>
        </section>

        <section>
            <h2 class="font-semibold text-2xl md:text-3xl leading-tight text-zinc-900 dark:text-white mb-2">
                Open-source
            </h2>
            <p class="max-w-3xl mb-4">
                Je contribue aux outils de l'écosystème Vue.js et Laravel que j'utilise au quotidien : quand je tombe
                sur un bogue ou qu'il manque quelque chose, j'essaie de proposer un correctif plutôt que de le
                contourner. J'ai contribué entre autres à :
            </p>
            <ul class="flex flex-wrap gap-2">
                <li v-for="project in openSource">
                    <a
                        :href="`https://github.com/${project.repo}`"
                        target="_blank"
                        class="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-950 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
                    >
                        <IGithub class="w-4" />
                        {{ project.name }}
                    </a>
                </li>
            </ul>
        </section>

        <section class="max-w-3xl">
            <h2 class="font-semibold text-2xl md:text-3xl leading-tight text-zinc-900 dark:text-white mb-2">
                En dehors du code
            </h2>
            <p>
                Je partage ma vie avec deux chats, Kimi et Eddy, qui supervisent attentivement chacune de mes revues de
                code.
            </p>
        </section>
    </div>
</template>

<script lang="ts" setup>
import IGithub from '@/assets/svg/github.svg?component';

// Most recent first in each group
const timeline = [
    {
        title: 'Expérience',
        steps: [
            {
                period: "2017 – aujourd'hui",
                title: 'Développeur web front-end',
                place: 'Libéo',
                description:
                    "Sites et applications web pour des organismes, des institutions et des entreprises d'ici, de l'intégration jusqu'à la mise en ligne.",
            },
            {
                period: '2017',
                title: 'Stagiaire en développement web',
                place: 'Timothée Rolin Web Design',
                description: "Stage internationnal de fin d'études de trois mois, juste avant mon arrivée chez Libéo.",
            },
        ],
    },
    {
        title: 'Bénévolat',
        steps: [
            {
                period: "2024 – aujourd'hui",
                title: 'Développeur web front-end',
                place: 'Interface Québec',
                description:
                    "Après un bref hiatus, j'ai rejoint l'équipe de bénévoles d'Interface Québec pour développer le site web de l'événement.",
            },
            {
                period: '2018 – 2020',
                title: 'Développeur web front-end',
                place: 'Web à Québec',
                description: "J'ai participé au développement du site web des éditions 2019 et 2020 du WAQ.",
            },
        ],
    },
    {
        title: 'Formation',
        steps: [
            {
                period: '2014 – 2017',
                title: "DEC en techniques d'intégration multimédia",
                place: 'Cégep de Sainte-Foy',
            },
        ],
    },
];

// Repositories where pull requests of mine were merged
const openSource = [
    { name: 'Nuxt', repo: 'nuxt/modules' },
    { name: 'Nuxt i18n', repo: 'nuxt-modules/i18n' },
    { name: 'shadcn-vue', repo: 'unovue/shadcn-vue' },
    { name: 'Floating Vue', repo: 'Akryum/floating-vue' },
    { name: 'Inertia.js', repo: 'inertiajs/inertia' },
    { name: 'Laravel Breeze', repo: 'laravel/breeze' },
    { name: 'Filament', repo: 'filamentphp/filament' },
    { name: 'Timber', repo: 'timber/timber' },
];
</script>
