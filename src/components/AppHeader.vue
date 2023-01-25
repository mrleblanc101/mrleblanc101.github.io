<template>
    <header
        class="bg-zinc-100 dark:bg-zinc-800 z-20"
        :class="{
            'border-b border-zinc-200 dark:border-zinc-700': $route.name !== 'index' && $route.name !== 'blog-slug',
        }"
    >
        <div class="max-w-screen-xl flex gap-10 items-center w-full mx-auto p-4 lg:px-8">
            <Transition
                enter-from-class="opacity-0 -translate-x-1.5"
                leave-to-class="opacity-0 -translate-x-1.5"
                enter-active-class="transition duration-300"
                leave-active-class="transition duration-300"
            >
                <NuxtLink
                    v-if="$route.name !== 'index'"
                    to="/"
                    class="text-2xl lg:text-3xl font-marvin font-black uppercase"
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
                        class="max-lg:p-4 sm:max-md:border-l sm:max-md:border-zinc-300 sm:max-md:dark:border-zinc-700 max-sm:w-full max-md:w-96 max-md:fixed max-md:top-0 max-md:right-0 max-md:bottom-0 max-md:h-[100dvh] max-md:bg-zinc-100 max-md:dark:bg-zinc-900 max-md:z-0 max-md:shadow-lg flex flex-col md:!flex md:!transform-none z-50"
                    >
                        <button
                            type="button"
                            class="flex-shrink-0 ml-auto mb-4 shadow rounded focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white items-center justify-center font-bold h-10 w-10 text-sm inline-flex md:hidden transition"
                            @click.stop="menuOpened = false"
                        >
                            <span class="sr-only">Fermer le menu</span>
                            <IClose class="w-6 h-6" />
                        </button>
                        <ul class="flex flex-col md:flex-row md:gap-12 font-medium">
                            <li>
                                <NuxtLink
                                    class="block max-md:text-lg max-md:pb-5 max-md:mb-5 max-md:border-b max-md:border-zinc-300 max-md:dark:border-zinc-700"
                                    to="/blog"
                                >
                                    Blog
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    class="block max-md:text-lg max-md:pb-5 max-md:mb-5 max-md:border-b max-md:border-zinc-300 max-md:dark:border-zinc-700"
                                    to="/projets"
                                >
                                    Projets
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    class="block max-md:text-lg max-md:pb-5 max-md:mb-5 max-md:border-b max-md:border-zinc-300 max-md:dark:border-zinc-700"
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
                        class="flex-shrink-0 shadow rounded focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white items-center justify-center font-bold h-10 w-10 text-sm inline-flex md:hidden transition"
                        @click.stop="menuOpened = true"
                    >
                        <span class="sr-only">Ouvrir le menu</span>
                        <IHamburger class="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import IClose from '@/assets/svg/close.svg?component';
import IHamburger from '@/assets/svg/hamburger.svg?component';

const route = useRoute();

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
