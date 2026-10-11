<template>
    <li>
        <NuxtLink
            class="flex h-full flex-col rounded-sm border border-zinc-200 bg-zinc-100 p-6 transition duration-300 hover:bg-zinc-100/60 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800/60"
            :to="post.path"
        >
            <div v-if="post.pinned" class="flex items-center gap-2 text-lg font-medium">
                <IPin class="h-6 w-6" />
                <span class="opacity-75">Épinglé</span>
            </div>
            <div v-else-if="index === 0" class="flex items-center gap-2 text-lg font-medium">
                <IPlant class="h-5 w-6" />
                <span class="opacity-75">Dernier article</span>
            </div>
            <!-- h3 on the home page, under its "Blog" h2 -->
            <component
                :is="is_home ? 'h3' : 'h2'"
                class="my-1 text-xl font-bold text-black last:mb-0 md:text-3xl dark:text-white"
            >
                {{ post.title }}
            </component>
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
