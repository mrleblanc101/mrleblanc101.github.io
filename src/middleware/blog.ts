// Redirects the /blog pages home while the blog is hidden (see app.config.ts)
export default defineNuxtRouteMiddleware(() => {
    if (!useAppConfig().blog) return navigateTo('/', { replace: true });
});
