import { PostController } from "@/controllers/post.controller";
import {
  PostCreateSchema,
  PostDeleteSchema,
  PostQuerySchema,
  PostUpdateSchema
} from "@/lib/schema/post.schema";
import { withErrorHandling } from "@/middlewares/error.middleware";
import { NextResponse, NextRequest } from "next/server";

const postController = new PostController();

export const GET = withErrorHandling(async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const query = PostQuerySchema.parse({
    method: searchParams.get('method'),
    authorId: searchParams.get('authorId'),
    category: searchParams.get('category'),
  });

  const posts = await postController.handleGetRequest(query);
  return NextResponse.json(posts);
});

export const POST = withErrorHandling(async (req: NextRequest) => {
  const body = await req.json();
  const data = PostCreateSchema.parse(body);

  const post = await postController.handleCreateRequest(data);
  return NextResponse.json({ data: post }, { status: 201 });
});

export const UPDATE = withErrorHandling(async (req: NextRequest) => {
  const body = await req.json();
  const data = PostUpdateSchema.parse(body);

  const post = await postController.handleUpdateRequest(data);
  return NextResponse.json({ data: post }, { status: 200 });
});

export const DELETE = withErrorHandling(async (req: NextRequest) => {
  const body = await req.json();
  const data = PostDeleteSchema.parse(body);

  const post = await postController.handleDeleteRequest(data);
  return NextResponse.json({ data: post }, { status: 200 });
});
