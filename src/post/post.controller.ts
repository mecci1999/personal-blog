import { Request, Response, NextFunction } from "express";
import { PostModel, PostStatus } from "./post.model";
import { createPost, getOnlyOnePost, getPostList } from "./post.service";

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
    response.send(data);
  } catch (error) {
    next(error);
  }
};

/**
 * 博客列表接口
 */
export const index = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // 准备数据

  try {
    // 调用获取列表方法
    const data = await getPostList();

    // 做出响应
    response.send(data);
  } catch (error) {
    next(error);
  }
}

/**
 * 根据ID获取单个博客
 */
export const show = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // 准备数据
  const { postId } = request.params;

  try {
    const data = await getOnlyOnePost(parseInt(postId, 10));

    // 做出响应
    response.send(data);
  } catch (error) {
    next(error);
  }
}