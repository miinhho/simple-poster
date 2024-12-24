import { PostService } from "@/services/post.service";
import { CreatePostDto, DeletePostDto, PostQueryDto, UpdatePostDto } from "@/types/post.types";

export class PostController {
  private postService: PostService;

  constructor() {
    this.postService = new PostService();
  }

  public async handleGetRequest(query: PostQueryDto) {
    switch (query.method) {
      case "getPostsByAuthor":
        if (!query.authorId) throw new Error('Author ID is required');
        return await this.postService.getPostsByAuthor(query.authorId);
      case "getPostsByCategory":
        if (!query.category) throw new Error('Category is required');
        return await this.postService.getPostsByCategory(query.category);
      case "getAllPosts":
        return await this.postService.getAllPosts();
      default:
        throw new Error('Invalid method');
    }
  }

  public async handleCreateRequest(data: CreatePostDto) {
    return await this.postService.createPost(data);
  }

  public async handleUpdateRequest(data: UpdatePostDto) {
    return await this.postService.updatePost(data);
  }

  public async handleDeleteRequest(data: DeletePostDto) {
    return await this.postService.deletePost(data);
  }
}