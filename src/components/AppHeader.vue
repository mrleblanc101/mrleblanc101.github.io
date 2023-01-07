<template>
    <header class="bg-zinc-100 dark:bg-zinc-800 z-20">
        <div class="max-w-screen-xl flex gap-10 justify-between items-center w-full mx-auto p-4 lg:px-8">
            <nuxt-link to="/" class="text-2xl lg:text-3xl font-marvin font-black uppercase">mrleblanc101</nuxt-link>
            <div class="flex items-center gap-10">
                <Transition
                    enter-from-class="translate-x-full"
                    leave-to-class="translate-x-full"
                    enter-active-class="transition duration-300"
                    leave-active-class="transition duration-300"
                >
                    <nav
                        v-show="menuOpened"
                        v-on-click-outside.bubble="onClickOutside"
                        class="max-lg:p-4 sm:max-md:border-l sm:max-md:border-zinc-300 sm:max-md:dark:border-zinc-700 max-sm:w-full max-md:w-96 max-md:fixed max-md:top-0 max-md:right-0 max-md:bottom-0 max-md:bg-zinc-100 max-md:dark:bg-zinc-900 max-md:z-0 max-md:shadow-lg flex flex-col md:!flex md:!transform-none"
                    >
                        <button
                            type="button"
                            class="flex-shrink-0 ml-auto mb-4 shadow rounded focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white items-center justify-center font-bold h-10 w-10 text-sm inline-flex md:hidden transition"
                            @click.stop="menuOpened = false"
                        >
                            <IClose class="w-6 h-6" />
                        </button>
                        <ul class="flex flex-col md:flex-row gap-6 md:gap-12 font-medium">
                            <li>
                                <nuxt-link to="/blog">Blog</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/projets">Projets</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/a-propos">À propos</nuxt-link>
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
