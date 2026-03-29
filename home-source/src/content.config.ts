import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    link: z.string().optional(),
    github: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

const members = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/members' }),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    affiliations: z.array(z.string()).max(2).default([]),
    bio: z.string(),
    avatar: z.string().optional(),
    website: z.string().optional(),
    github: z.string().optional(),
    email: z.string().optional(),
    scholar: z.string().optional(),
    twitter: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(999),
  }),
});

export const collections = { blog, projects, members };
