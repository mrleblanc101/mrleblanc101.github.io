<template>
    <div class="mx-auto my-6 flex w-full max-w-(--breakpoint-2xl) flex-col gap-10 px-4 md:gap-16 lg:my-16 lg:px-8">
        <div class="max-w-3xl">
            <h1 class="mb-4 font-marvin text-3xl tracking-wide text-black uppercase md:text-5xl dark:text-white">
                À propos
            </h1>
            <p class="text-lg leading-relaxed md:text-xl">
                Je suis Sébastien, développeur Front-End à Québec. Je conçois des interfaces avec Vue.js et Nuxt, et je
                touche aussi au back-end avec Laravel quand le projet le demande. En dehors du travail, je donne de mon
                temps à la communauté web de Québec et aux outils open-source que j'utilise tous les jours.
            </p>
        </div>

        <section v-for="group in timeline" :key="group.title">
            <h2 class="mb-4 text-2xl leading-tight font-semibold text-zinc-900 md:text-3xl dark:text-white">
                {{ group.title }}
            </h2>
            <ol class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <li
                    v-for="step in group.steps"
                    :key="step.period"
                    class="flex flex-col gap-2 rounded-xl bg-zinc-100 p-5 md:p-6 dark:bg-zinc-900"
                >
                    <p class="text-sm font-medium tracking-wide text-zinc-500 uppercase">{{ step.period }}</p>
                    <h3 class="text-xl font-semibold text-zinc-900 dark:text-white">{{ step.place }}</h3>
                    <p class="font-medium text-zinc-600 dark:text-zinc-400">{{ step.title }}</p>
                    <p v-if="step.description">{{ step.description }}</p>
                </li>
            </ol>
        </section>

        <section>
            <h2 class="mb-2 text-2xl leading-tight font-semibold text-zinc-900 md:text-3xl dark:text-white">
                Open-source
            </h2>
            <p class="mb-4 max-w-3xl">
                Je contribue aux outils de l'écosystème Vue.js et Laravel que j'utilise au quotidien : quand je tombe
                sur un bogue ou qu'il manque quelque chose, j'essaie de proposer un correctif plutôt que de le
                contourner. J'ai contribué entre autres à :
            </p>
            <ul class="flex flex-wrap gap-2">
                <li v-for="project in openSource" :key="project.repo">
                    <a
                        :href="`https://github.com/${project.repo}`"
                        target="_blank"
                        class="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 font-medium text-zinc-700 transition-colors hover:bg-zinc-200 hover:text-zinc-950 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
                    >
                        <IGithub class="w-4" />
                        {{ project.name }}
                    </a>
                </li>
            </ul>
        </section>

        <section class="max-w-3xl">
            <h2 class="mb-2 text-2xl leading-tight font-semibold text-zinc-900 md:text-3xl dark:text-white">
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
                description: "Stage international de fin d'études de trois mois, juste avant mon arrivée chez Libéo.",
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
