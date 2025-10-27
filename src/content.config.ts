// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
// const team = defineCollection({
//     schema: ({ image }) =>
//         z.object({
//             name: z.string(),
//             function: z.string(),
//             bio: z.string(),
//             pic: image(),
//             pics: z.array(image()),
//         }),
// });

const projects = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            preview: image(),
            pics: z.array(image()),
            links: z.array(
                z.object({
                    name: z.string(),
                    link: z.string()
                })
            ),
            year: z.number(),
            partners: z.array(z.string()),
            services: z.array(z.string()),
            tools: z.array(z.string()),
            device: z.array(z.string()).optional(),
            role: z.string(),
            tags: z.array(z.string()),
            draft: z.boolean(),
            permalink: z.string()
        })
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = {projects: projects};