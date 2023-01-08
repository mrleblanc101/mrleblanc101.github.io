<template>
    <li
        ref="elementRef"
        class="group relative rounded overflow-hidden bg-zinc-100 dark:bg-zinc-800"
        @mouseenter="sharedState.elementRef = elementRef"
        @mouseleave="sharedState.elementRef = null"
        @touchstart="onTap"
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
        <div class="absolute top-0 bottom-0 left-0 w-full z-10 overflow-y-auto flex flex-col">
            <div
                class="relative mt-auto p-4 md:px-5 md:py-4 after:content-[''] after:absolute after:-top-[100%] after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t after:from-black/80 after:to-transparent after:-z-10 after:pointer-events-none"
            >
                <img class="max-h-[60px]" :src="`${project._path}/logo.svg`" :alt="`Logo: ${project.title}`" />
            </div>
            <Collapse :when="is_expanded" class="v-collapse">
                <div class="p-4 md:px-5 md:py-4 pt-0 md:pt-0 bg-black/80 flex flex-col gap-3">
                    <div v-if="project.description" class="text-gray-300">
                        {{ project.description }}
                    </div>
                    <ul class="flex flex-wrap gap-2" v-if="project.tags && project.tags.length">
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
                        class="inline-flex gap-1 hover:gap-2 font-bold transition-all delay-300 before:content-[''] before:block [@media(any-hover:hover)]:before:absolute [@media(any-hover:hover)]:before:inset-0 text-gray-300"
                    >
                        Voir le projet <IArrowRight class="w-5" />
                    </a>
                </div>
            </Collapse>
        </div>
    </li>
</template>

<script lang="ts">
const sharedState = ref({
    elementRef: null,
});
</script>

<script lang="ts" setup>
import IArrowRight from '@/assets/svg/arrow-right.svg?component';

const elementRef = ref(null);
const is_expanded = computed(() => {
    return (elementRef.value && sharedState.value.elementRef === elementRef.value) || false;
});

defineProps({
    project: {
        type: Object,
        default: null,
        required: true,
    },
});

function onTap(event: TouchEvent) {
    sharedState.value.elementRef = elementRef.value;
}
</script>

<style lang="postcss" scoped>
.v-collapse {
    transition: height var(--vc-auto-duration) ease-out;
}
</style>
