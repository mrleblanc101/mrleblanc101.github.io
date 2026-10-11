export function useProjects(category?: string, limit?: number) {
    return useAsyncData(`projets-${category ?? 'all'}-${limit ?? 'all'}`, () => {
        let query = queryCollection('projets').order('order', 'DESC');
        if (category) query = query.where('stem', 'LIKE', `${category}/%`);
        if (limit) query = query.limit(limit);
        return query.all();
    });
}

export function projectCategory(project: { stem: string }) {
    return project.stem.split('/')[0];
}
