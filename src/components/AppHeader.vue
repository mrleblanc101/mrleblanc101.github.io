<template>
    <header class="bg-zinc-100 dark:bg-zinc-800">
        <div class="max-w-screen-xl flex gap-10 justify-between items-center w-full mx-auto p-4 lg:px-8">
            <div class="text-3xl font-black font-marvin">mrleblanc101</div>
            <div class="flex items-center gap-10">
                <nav class="hidden lg:block">
                    <ul class="flex gap-12 font-medium">
                        <li>
                            <nuxt-link to="/">Accueil</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Blog</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Réalisation</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">A propos</nuxt-link>
                        </li>
                    </ul>
                </nav>
                <div class="flex gap-2">
                    <ColorSwitcher />
                    <button
                        type="button"
                        class="flex-shrink-0 shadow rounded focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white dark:text-gray-800 items-center justify-center font-bold h-10 w-10 text-sm inline-flex lg:hidden"
                        @click.stop="menuOpened = !menuOpened"
                    >
                        <IHamburger v-if="!menuOpened" class="w-4 h-4" />
                        <IClose v-else class="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import IClose from '@/assets/svg/close.svg?component';
import IHamburger from '@/assets/svg/hamburger.svg?component';

const menuOpened = ref(false);
</script>
