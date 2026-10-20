<template>
    <footer class="mx-auto flex w-full max-w-(--breakpoint-2xl) items-center justify-between gap-4 p-4 lg:px-8">
        <div>
            &copy; {{ new Date().getFullYear() }} Sébastien LeBlanc. Tous droits réservés.
            <div v-if="gitShortSha" class="mt-1 font-mono text-xs text-zinc-500">
                Version: {{ [gitTag, gitShortSha].filter(Boolean).join(' • ') }}
            </div>
        </div>
        <SocialLinks class="flex shrink-0 gap-4" icon-class="w-6" />
    </footer>
</template>

<script lang="ts" setup>
const { gitTag, gitShortSha } = useRuntimeConfig().public;
</script>
