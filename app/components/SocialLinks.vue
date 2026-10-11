<template>
    <div>
        <a
            v-for="social in socials"
            class="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
            :href="social.url"
            target="_blank"
        >
            <component :is="icons[social.icon]" :class="iconClass" />
            <span class="sr-only">{{ social.label }}</span>
        </a>
    </div>
</template>

<script lang="ts" setup>
import IGithub from '@/assets/svg/github.svg?component';
import ILinkedIn from '@/assets/svg/linkedin.svg?component';

defineProps<{ iconClass?: string }>();

const { socials } = useAppConfig();
const icons: Record<string, Component> = { github: IGithub, linkedin: ILinkedIn };
</script>
