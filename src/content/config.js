
import { z, defineCollection } from 'astro:content';

const product = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image(),
    category: z.string().optional(),
    isFeatured: z.boolean().optional().default(false),
  })
});

export const collections = {
  product,
};