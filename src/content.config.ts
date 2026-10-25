import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const courses = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.date(),
			image: z.string(),
			author: z.string(),
			tags: z.array(z.string())
		})
})

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.date(),
			category: z.string(),
			tags: z.array(z.string()).default([]),
			heroImage: z.string().optional(),
			heroImageAlt: z.string().optional(),
			featured: z.boolean().default(false),
			draft: z.boolean().default(false),
			author: z.string().default('Revolt Energy')
		})
})

export const collections = {
	courses,
	blog
}
