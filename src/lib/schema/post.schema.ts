import { z } from "zod";

export const PostCreateSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  content: z.string().min(1, { message: 'Content is required' }),
  author: z.string().min(1, { message: 'Author is required' }),
  category: z.string().optional(),
});

export const PostUpdateSchema = z.object({
  id: z.string().min(1, { message: 'ID is required' }),
  title: z.string().optional(),
  content: z.string().optional(),
  category: z.string().optional(),
});

export const PostDeleteSchema = z.object({
  id: z.string().min(1, { message: 'ID is required' }),
});

export const PostQuerySchema = z.object({
  method: z.enum(['getPostsByAuthor', 'getPostsByCategory', 'getAllPosts']),
  authorId: z.string().optional(),
  category: z.string().optional(),
});