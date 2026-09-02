import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: [
      '**/*.md',
      '!**/_*',
      '!**/.*/**',
    ],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),

      cover: image().optional(),
      coverAlt: z.string().default(''),

      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
