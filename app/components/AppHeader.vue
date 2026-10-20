<template>
    <header
        class="sticky top-0 z-20 border-b bg-zinc-100 transition-colors duration-300 dark:bg-zinc-900"
        :class="$route.name !== 'index' || stuck ? 'border-zinc-200 dark:border-zinc-800' : 'border-transparent'"
    >
        <div class="mx-auto flex w-full max-w-(--breakpoint-2xl) items-center gap-10 px-4 lg:px-8">
            <Transition
                enter-from-class="opacity-0 -translate-x-1.5"
                leave-to-class="opacity-0 -translate-x-1.5"
                enter-active-class="transition duration-300"
                leave-active-class="transition duration-300"
            >
                <NuxtLink
                    to="/"
                    class="font-marvin text-2xl leading-[0.8] text-zinc-950 uppercase transition hover:text-gray-700 lg:text-3xl dark:text-white dark:hover:text-gray-300"
                >
                    mrleblanc101
                </NuxtLink>
            </Transition>
            <div class="ml-auto flex min-h-18 items-center gap-8">
                <Transition
                    enter-from-class="translate-x-full"
                    leave-to-class="translate-x-full"
                    enter-active-class="transition duration-300"
                    leave-active-class="transition duration-300"
                >
                    <nav
                        v-show="menuOpened"
                        v-on-click-outside.bubble="onClickOutside"
                        class="z-50 flex flex-col max-lg:p-4 max-md:fixed max-md:top-0 max-md:right-0 max-md:bottom-0 max-md:z-0 max-md:h-dvh max-md:w-96 max-md:bg-zinc-100 max-md:shadow-lg max-sm:w-full sm:max-md:border-l sm:max-md:border-zinc-300 md:flex! md:transform-none! max-md:dark:bg-zinc-950 sm:max-md:dark:border-zinc-800"
                    >
                        <button
                            type="button"
                            class="mb-4 ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm text-zinc-600 ring-zinc-400 transition hover:text-zinc-950 focus:outline-hidden focus-visible:ring-3 md:hidden dark:text-zinc-400 dark:ring-zinc-500 dark:hover:text-white"
                            @click.stop="menuOpened = false"
                        >
                            <span class="sr-only">Fermer le menu</span>
                            <IClose class="h-6 w-6" />
                        </button>
                        <ul class="flex flex-col font-medium md:flex-row md:gap-10">
                            <li v-if="appConfig.blog">
                                <NuxtLink
                                    class="block text-zinc-600 transition-colors hover:text-zinc-950 max-md:mb-5 max-md:border-b max-md:border-zinc-300 max-md:pb-5 max-md:text-lg dark:text-zinc-400 dark:hover:text-white max-md:dark:border-zinc-800"
                                    to="/blog"
                                >
                                    Blog
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    class="block text-zinc-600 transition-colors hover:text-zinc-950 max-md:mb-5 max-md:border-b max-md:border-zinc-300 max-md:pb-5 max-md:text-lg dark:text-zinc-400 dark:hover:text-white max-md:dark:border-zinc-800"
                                    to="/projets"
                                >
                                    Projets
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    class="block text-zinc-600 transition-colors hover:text-zinc-950 max-md:mb-5 max-md:border-b max-md:border-zinc-300 max-md:pb-5 max-md:text-lg dark:text-zinc-400 dark:hover:text-white max-md:dark:border-zinc-800"
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
                        class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm text-zinc-600 ring-zinc-400 transition hover:text-zinc-950 focus:outline-hidden focus-visible:ring-3 md:hidden dark:text-zinc-400 dark:ring-zinc-500 dark:hover:text-white"
                        @click.stop="menuOpened = true"
                    >
                        <span class="sr-only">Ouvrir le menu</span>
                        <IHamburger class="h-4 w-4" />
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

// The header is sticky: on the home page, its border only shows once content scrolls under it
const { y } = useWindowScroll();
const stuck = computed(() => y.value > 0);

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
