import { ApiError } from "@/types/error.types";
import Post from "@/model/post.model";
import { CreatePostDto, DeletePostDto, UpdatePostDto } from "@/types/post.types";

export class PostService {
  public async getPostsByAuthor(authorId: string) {
    const posts = await Post.find({ author: authorId })
      .populate('author')
      .sort({ createdAt: -1 })
      .catch(() => {
        throw new ApiError('Posts not found', 404);
      });

    return posts;
  }

  public async getPostsByCategory(category: string) {
    const posts = await Post.find({ category: category })
      .populate('author')
      .sort({ createdAt: -1 })
      .catch(() => {
        throw new ApiError('Posts not found', 404);
      });

    return posts;
  }

  public async getAllPosts() {
    const posts = await Post.find({})
      .populate('author')
      .sort({ createdAt: -1 })
      .catch(() => {
        throw new ApiError('Posts not found', 404);
      });

    return posts;
  }

  public async createPost(data: CreatePostDto) {
    const post = await Post.create(data).catch(() => {
      throw new ApiError('Post not created', 400);
    });

    return post;
  }

  public async updatePost(data: UpdatePostDto) {
    const post = await Post.findByIdAndUpdate(
      data.id,
      { ...data, updatedAt: new Date() },
      { new: true }
    ).populate('author')
      .catch(() => {
        throw new ApiError('Post not found', 404);
      });

    return post;
  }

  public async deletePost(data: DeletePostDto) {
    const post = await Post.findByIdAndDelete(data.id)
      .catch(() => {
        throw new ApiError('Post not found', 404);
      });

    return post;
  }
}