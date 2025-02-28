// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const team = defineCollection({
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            function: z.string(),
            bio: z.string(),
            pic: image(),
            pics: z.array(image()),
        }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = {team: team};