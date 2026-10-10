<template>
    <li>
        <NuxtLink
            class="flex flex-col rounded-sm p-6 border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/60 transition duration-300 h-full"
            :to="post.path"
        >
            <div v-if="post.pinned" class="flex items-center text-lg gap-2 font-medium">
                <IPin class="h-6 w-6" />
                <span class="opacity-75">Épinglé</span>
            </div>
            <div v-else-if="index === 0" class="flex items-center text-lg gap-2 font-medium">
                <IPlant class="h-5 w-6" />
                <span class="opacity-75">Dernier article</span>
            </div>
            <h2 class="font-bold text-black dark:text-white text-xl md:text-3xl my-1 last:mb-0">{{ post.title }}</h2>
            <div class="font-medium opacity-75">{{ formatDate(post.createdAt) }}</div>
        </NuxtLink>
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
