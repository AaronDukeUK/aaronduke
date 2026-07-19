import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const recipes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recipes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    serves: z.string().optional(),
    prepTime: z.string().optional(),
    cookTime: z.string().optional(),
    tags: z.array(z.string()).default([]),
    ingredients: z.array(z.string()).min(1),
    favourite: z.boolean().default(false),
    source: z.string().url().optional(),
  }),
})

export const collections = { recipes }
