import { z, defineCollection } from 'astro:content'

const technology = z.string()

const project = z.object({
  title: z.string(),
  icon: z.string().emoji(),
  abstract: z.string(),
  github: z.string().url().optional(),
  link: z.string().url().optional(),
})

const paper = z.object({
  title: z.string(),
  icon: z.string().emoji(),
  abstract: z.string(),
  link: z.string(),
})

const book = z.object({
  title: z.string(),
  author: z.string(),
  rating: z.enum(['💩', '⭐️', '⭐️⭐️', '⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️⭐️', '❤️❤️❤️❤️❤️']),
})

const series = z.object({
  title: z.string(),
  seasons: z.array(z.tuple([z.number(), z.number()])),
  rating: z.enum(['💩', '⭐️', '⭐️⭐️', '⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️⭐️', '❤️❤️❤️❤️❤️']),
})

const recipe = z.object({
  title: z.string(),
  youtube: z.string().url(),
  ingredients: z.array(z.tuple([z.number(), z.string(), z.string()])),
})

const categories = defineCollection({
  type: 'data',
  schema: z.union([z.array(technology), z.array(project), z.array(paper), z.array(book), z.array(series), z.array(recipe)]),
})

const pages = defineCollection({
  type: 'content',
})

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string().emoji(),
    date: z.date(),
    tags: z.array(z.string()),
  }),
})

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
  }),
})

export const collections = {
  categories,
  pages,
  posts,
  notes,
}

export type Technology = z.infer<typeof technology>
export type Project = z.infer<typeof project>
export type Paper = z.infer<typeof paper>
export type Book = z.infer<typeof book>
export type Series = z.infer<typeof series>
export type Recipe = z.infer<typeof recipe>
