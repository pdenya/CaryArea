import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const activities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    category: z.enum(['events', 'water', 'indoor', 'outdoor', 'hikes', 'food', 'daytrips']),
    area: z.string(),
    cost: z.string(),
    heat: z.enum(['ac', 'water', 'shade', 'timing']),
    mapUrl: z.string().url().optional(),
    website: z.string().url().optional(),
    date: z.string().optional(),
    driveTime: z.string().optional(),
    warning: z.string().optional(),
    bookAhead: z.boolean().default(false),
    ages: z.string().optional(),
  }),
});

export const collections = { activities };
