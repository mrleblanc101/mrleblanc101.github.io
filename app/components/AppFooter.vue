<template>
    <footer class="mx-auto flex w-full max-w-(--breakpoint-2xl) items-center justify-between gap-4 p-4 lg:px-8">
        <div>&copy; {{ new Date().getFullYear() }} Sébastien LeBlanc. Tous droits réservés.</div>
        <SocialLinks class="flex shrink-0 gap-4" icon-class="w-6" />
    </footer>
</template>
