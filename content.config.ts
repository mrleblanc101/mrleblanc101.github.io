import { defineCollection, defineContentConfig, z } from '@nuxt/content';

// Dot-prefixed files are drafts
const exclude = ['**/.*'];

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: 'page',
            source: { include: 'blog/**/*.md', exclude },
            schema: z.object({
                createdAt: z.date(),
                pinned: z.boolean().optional(),
                readingTime: z.object({ minutes: z.number() }),
            }),
        }),
        projets: defineCollection({
            type: 'data',
            source: { include: 'projets/**/*.yml', exclude },
            schema: z.object({
                title: z.string(),
                url: z.string().optional(),
                order: z.number(),
                description: z.string().optional(),
                tags: z.array(z.string()).optional(),
            }),
        }),
    },
});
