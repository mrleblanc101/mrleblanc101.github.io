<template>
    <li
        class="group relative rounded overflow-hidden bg-zinc-100 dark:bg-zinc-800"
        @mouseenter="is_expanded = true"
        @mouseleave="is_expanded = false"
        @touchend="onTap"
    >
        <!-- <div class="absolute p-4 text-2xl top-0 left-0 bg-red-500 text-white">{{ project.order }}</div> -->
        <img
            class="w-full aspect-[16/10] object-cover"
            :src="`${project._path}/thumbnail.jpg`"
            width="600"
            height="365"
            :alt="`Image: ${project.title}`"
            loading="lazy"
        />
        <div class="absolute top-0 bottom-0 left-0 w-full z-50 overflow-y-auto flex flex-col">
            <div
                class="relative mt-auto p-4 md:p-6 after:content-[''] after:absolute after:-top-[100%] after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t after:from-black/70 after:to-transparent after:-z-10 after:pointer-events-none"
            >
                <img class="max-h-[60px]" :src="`${project._path}/logo.svg`" :alt="`Logo: ${project.title}`" />
            </div>
            <Collapse :when="is_expanded" class="v-collapse">
                <div class="p-4 md:p-6 pt-0 md:pt-0 bg-black/70 flex flex-col gap-3">
                    <!-- <div class="text-gray-300">
                            Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius
                            blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Donec id elit
                            non mi porta gravida at eget metus.
                        </div> -->
                    <ul class="flex flex-wrap gap-2">
                        <li
                            v-for="tag in project.tags"
                            class="inline-block px-4 py-2 bg-gray-200 text-gray-700 font-medium text-xs uppercase rounded-full shadow-md whitespace-nowrap"
                        >
                            {{ tag }}
                        </li>
                    </ul>
                    <a
                        v-if="project.url"
                        :href="project.url"
                        target="_blank"
                        class="inline-flex gap-1 hover:gap-2 font-bold transition-all before:content-[''] before:block [@media(any-hover:hover)]:before:absolute [@media(any-hover:hover)]:before:inset-0"
                    >
                        Voir le projet <IArrowRight class="w-5" />
                    </a>
                </div>
            </Collapse>
        </div>
    </li>
</template>

<script lang="ts" setup>
import IArrowRight from '@/assets/svg/arrow-right.svg?component';
const is_expanded = ref(false);

defineProps({
    project: {
        type: Object,
        default: null,
        required: true,
    },
});

function onTap(event: TouchEvent) {
    is_expanded.value = !is_expanded.value;
}
</script>

<style lang="postcss" scoped>
.v-collapse {
    transition: height var(--vc-auto-duration) ease-out;
}
</style>
