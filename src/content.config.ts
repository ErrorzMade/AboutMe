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
    /**
     * Two layouts both work, so nothing breaks either way:
     *
     *   a-post.md                        ->  /blog/a-post/
     *   a-post/Whatever You Named It.md  ->  /blog/a-post/
     *
     * When a post sits in its own folder, the FOLDER name becomes the URL.
     * Images can then live beside the post, and the note keeps a readable
     * name in Obsidian instead of every file being called index.
     */
    generateId: ({ entry }) => {
      const parts = entry.split('/');
      const raw = parts.length > 1 ? parts[0] : parts[0].replace(/\.md$/i, '');
      return raw
        .toLowerCase()
        .trim()
        .replace(/[\s_]+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    },
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
