
import { z, defineCollection } from 'astro:content';

const productCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    isFeatured: z.boolean().default(false),
  })
});

export const collections = {
  'product': productCollection,
};