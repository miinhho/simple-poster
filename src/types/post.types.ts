import { z } from "zod";
import {
  PostCreateSchema,
  PostDeleteSchema,
  PostQuerySchema,
  PostUpdateSchema
} from "@/lib/schema/post.schema";

export type CreatePostDto = z.infer<typeof PostCreateSchema>;
export type PostQueryDto = z.infer<typeof PostQuerySchema>;
export type UpdatePostDto = z.infer<typeof PostUpdateSchema>;
export type DeletePostDto = z.infer<typeof PostDeleteSchema>;