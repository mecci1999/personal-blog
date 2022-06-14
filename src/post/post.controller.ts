import { Request, Response, NextFunction } from "express";
import { PostModel, PostStatus } from "./post.model";
import { createPost } from "./post.service";

/**
 * 创建博客
 */
export const store = async (request: Request, response: Response, next: NextFunction) => {
  // 准备数据
  const { title, content, status = PostStatus.draft, description, wordAmount, readTime, type } = request.body;
  const { id: userId } = request.user;

  const post: PostModel = {
    title,
    content,
    status,
    description,
    wordAmount,
    readTime,
    type,
    userId,
  };

  // 创建内容
  try {
    const data = await createPost(post);

    // 做出响应
    response.send(data).sendStatus(201);
  } catch (error) {
    next(error);
  }
};
