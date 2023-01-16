<template>
    <li
        :class="{
            'md:col-span-2': index === 0 || (post.pinned && !is_home),
        }"
    >
        <nuxt-link
            class="flex flex-col rounded p-6 border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition h-full"
            :to="post._path"
        >
            <div v-if="post.pinned" class="flex items-center text-lg gap-2 font-medium">
                <IPin class="h-6 w-6" />
                <span class="opacity-60">Épinglé</span>
            </div>
            <div v-else="index === 0" class="flex items-center text-lg gap-2 font-medium">
                <IPlant class="h-5 w-6" />
                <span class="opacity-60">Dernier article</span>
            </div>
            <h2 class="font-black text-xl md:text-3xl my-1 last:mb-0">{{ post.title }}</h2>
            <div v-if="index === 0 || post.pinned" class="font-medium opacity-60">{{ formatDate(post.createdAt) }}</div>
        </nuxt-link>
    </li>
</template>

<script lang="ts" setup>
import IPlant from '@/assets/svg/plant.svg?component';
import IPin from '@/assets/svg/pin.svg?component';

const props = defineProps({
    index: {
        type: Number,
        default: 0,
        required: true,
    },
    post: {
        type: Object,
        default: null,
        required: true,
    },
    is_home: {
        type: Boolean,
        default: false,
    },
});

function formatDate(date: Date) {
    return new Date(date).toLocaleDateString('fr', { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' });
}
</script>
