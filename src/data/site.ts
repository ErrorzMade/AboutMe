import { z } from 'astro/zod';
import raw from './site.json';

const schema = z.object({
  name: z.string(),
  tagline: z.string(),
  avatar: z.string(),
  discord: z.string(),
  pronouns: z.object({
    shown: z.string(),
    detail: z.array(z.object({ form: z.string(), ok: z.string() })),
  }),
  socials: z.array(z.object({ label: z.string(), href: z.url() })),
  games: z.array(z.string()),
  specs: z.array(z.object({ label: z.string(), value: z.string() })),
});

const parsed = schema.safeParse(raw);

if (!parsed.success) {
  throw new Error(
    'src/data/site.json is not valid:\n' +
      parsed.error.issues
        .map((i) => `  - ${i.path.join('.') || '(root)'}: ${i.message}`)
        .join('\n'),
  );
}

export const site = parsed.data;
