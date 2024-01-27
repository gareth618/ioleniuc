import { z, defineCollection } from 'astro:content'

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string().emoji(),
    date: z.date(),
    tags: z.array(z.string()),
  }),
})

const papers = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    icon: z.string().emoji(),
    abstract: z.string(),
    link: z.string().url().optional(),
  }),
})

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    icon: z.string().emoji(),
    abstract: z.string(),
    github: z.string().url().optional(),
    link: z.string().url().optional(),
  }),
})

const technologies = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    rating: z.enum(['💩', '❤️']).optional(),
  }),
})

const rating = z.enum(['⭐️', '⭐️⭐️', '⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️⭐️', '💩', '💩💩', '💩💩💩', '💩💩💩💩', '💩💩💩💩💩', '🛠️', '🛠️🛠️', '🛠️🛠️🛠️', '🛠️🛠️🛠️🛠️', '🛠️🛠️🛠️🛠️🛠️', '❤️', '❤️❤️', '❤️❤️❤️', '❤️❤️❤️❤️', '❤️❤️❤️❤️❤️'])

const series = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    rating,
    date: z.date(),
  }),
})

const books = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    rating,
    date: z.date(),
  }),
})

const albums = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    date: z.date(),
  }),
})

export const collections = {
  posts,
  papers,
  projects,
  technologies,
  series,
  books,
  albums,
}
