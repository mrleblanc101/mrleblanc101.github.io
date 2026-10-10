<template>
    <header
        class="bg-zinc-100 flex items-center min-h-18 dark:bg-zinc-900 z-20"
        :class="{
            'border-b border-zinc-200 dark:border-zinc-800': $route.name !== 'index',
        }"
    >
        <div class="max-w-(--breakpoint-xl) flex gap-10 items-center w-full mx-auto px-4 lg:px-8">
            <Transition
                enter-from-class="opacity-0 -translate-x-1.5"
                leave-to-class="opacity-0 -translate-x-1.5"
                enter-active-class="transition duration-300"
                leave-active-class="transition duration-300"
            >
                <NuxtLink
                    to="/"
                    class="text-2xl lg:text-3xl font-marvin uppercase leading-[0.8]"
                >
                    mrleblanc101
                </NuxtLink>
            </Transition>
            <div class="ml-auto flex items-center gap-10">
                <Transition
                    enter-from-class="translate-x-full"
                    leave-to-class="translate-x-full"
                    enter-active-class="transition duration-300"
                    leave-active-class="transition duration-300"
                >
                    <nav
                        v-show="menuOpened"
                        v-on-click-outside.bubble="onClickOutside"
                        class="max-lg:p-4 sm:max-md:border-l sm:max-md:border-zinc-300 sm:max-md:dark:border-zinc-800 max-sm:w-full max-md:w-96 max-md:fixed max-md:top-0 max-md:right-0 max-md:bottom-0 max-md:h-dvh max-md:bg-zinc-100 max-md:dark:bg-zinc-950 max-md:z-0 max-md:shadow-lg flex flex-col md:flex! md:transform-none! z-50"
                    >
                        <button
                            type="button"
                            class="ml-auto mb-4 md:hidden shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-sm shadow-sm transition bg-zinc-900 text-white hover:bg-zinc-700 active:bg-zinc-950 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white dark:active:bg-zinc-300 focus:outline-hidden focus-visible:ring-3 ring-zinc-400 dark:ring-zinc-500"
                            @click.stop="menuOpened = false"
                        >
                            <span class="sr-only">Fermer le menu</span>
                            <IClose class="w-6 h-6" />
                        </button>
                        <ul class="flex flex-col md:flex-row md:gap-12 font-medium">
                            <li v-if="appConfig.blog">
                                <NuxtLink
                                    class="block max-md:text-lg max-md:pb-5 max-md:mb-5 max-md:border-b max-md:border-zinc-300 max-md:dark:border-zinc-800"
                                    to="/blog"
                                >
                                    Blog
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    class="block max-md:text-lg max-md:pb-5 max-md:mb-5 max-md:border-b max-md:border-zinc-300 max-md:dark:border-zinc-800"
                                    to="/projets"
                                >
                                    Projets
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    class="block max-md:text-lg max-md:pb-5 max-md:mb-5 max-md:border-b max-md:border-zinc-300 max-md:dark:border-zinc-800"
                                    to="/a-propos"
                                >
                                    À propos
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </Transition>
                <div class="flex gap-2">
                    <ColorSwitcher />
                    <button
                        ref="menuBtn"
                        type="button"
                        class="md:hidden shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-sm shadow-sm transition bg-zinc-900 text-white hover:bg-zinc-700 active:bg-zinc-950 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white dark:active:bg-zinc-300 focus:outline-hidden focus-visible:ring-3 ring-zinc-400 dark:ring-zinc-500"
                        @click.stop="menuOpened = true"
                    >
                        <span class="sr-only">Ouvrir le menu</span>
                        <IHamburger class="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
        <div class="header-inner"></div>
    </header>
</template>

<script lang="ts" setup>
import IClose from '@/assets/svg/close.svg?component';
import IHamburger from '@/assets/svg/hamburger.svg?component';

const route = useRoute();
const appConfig = useAppConfig();

const menuOpened = ref(false);
const menuBtn = ref(null);

watch(
    () => route.fullPath,
    () => {
        menuOpened.value = false;
    },
);

function onClickOutside(event: MouseEvent) {
    if (event.target !== menuBtn.value) menuOpened.value = false;
}
</script>
