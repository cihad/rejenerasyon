
import { z, defineCollection } from 'astro:content';

const productCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image(),
    category: z.string(),
    isFeatured: z.boolean().default(false),
  })
});

export const collections = {
  'product': productCollection,
};