import { Request, Response, NextFunction } from "express";
import { PostModel, PostStatus } from "./post.model";
import {
  createPost,
  createPostBgImg,
  creatPostTag,
  deletePostTag,
  findBgImgByPostId,
  getOnlyOnePost,
  getPostList,
  postHasTag,
} from "./post.service";
import fs from "fs";
import _ from "lodash";
import { APP_PORT } from "@/app/app.config";
import path from "path";
import { createTag, getTagByName } from "@/tag/tag.service";
import { TagModel } from "@/tag/tag.model";

/**
 * 创建博客
 */
export const store = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // 准备数据
  const {
    title,
    content,
    status = PostStatus.draft,
    description,
    wordAmount,
    readTime,
    type,
  } = request.body;
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
};

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

    // 对时间做处理
    const [{ created, updated, filename }] = data;

    data[0].created = changeTimeFormat(created);
    data[0].updated = changeTimeFormat(updated);

    data[0].bgImgUrl = `localhost:3000/posts/${postId}/bgImg`;
    // 做出响应
    response.send(data);
  } catch (error) {
    next(error);
  }
};

/**
 * 改变时间格式
 */
export const changeTimeFormat = (date: string) => {
  let time = new Date(date).toJSON();
  return new Date(+new Date(time) + 8 * 3600 * 1000)
    .toISOString()
    .replace(/T/g, " ")
    .replace(/\.[\d]{3}Z/, "");
};

/**
 * 上传博客封面
 */
export const uploadPostBgImg = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // 当前用户 ID
  const { postId } = request.params;
  const id = parseInt(postId, 10);

  // 头像文件信息
  const fileInfo = _.pick(request.file, ["mimetype", "filename", "size"]);

  //准备头像数据
  const postBgImg = {
    ...fileInfo,
    postId: id,
  };

  try {
    //保存数据
    const data = await createPostBgImg(postBgImg);

    //做出响应
    response.status(201).send(data);
  } catch (error) {
    next(error);
  }
};

/**
 * 获取博客封面接口
 */
export const serve = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // 用户 ID
  const { postId } = request.params;

  try {
    //获取博客封面数据
    const image = await findBgImgByPostId(parseInt(postId, 10));

    if (!image) {
      throw new Error("FILE_NOT_FOUND");
    }

    //文件名和目录
    let filename = image.filename;
    let root = path.join("uploads", "postBgImg");

    // 检查文件是否存在
    const fileExist = fs.existsSync(path.join(root, `${filename}`));

    if (!fileExist) throw new Error("FILE_NOT_FOUND");

    if (fileExist) {
      filename = `${filename}`;
    }

    //做出响应
    response.sendFile(filename, {
      root,
      headers: {
        "Content-Type": image.mimetype,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * 添加内容标签
 */
export const storePostTag = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // 准备数据
  const { postId } = request.params;
  const { name } = request.body;

  let tag: TagModel;

  //判断数据仓库中有没有当前这个标签
  try {
    tag = await getTagByName(name);
  } catch (error) {
    return next(error);
  }

  //找到标签
  if (tag) {
    //验证内容标签
    try {
      const postTag = await postHasTag(parseInt(postId, 10), tag.id);
      if (postTag) return next(new Error("POST_ALREADY_HAS_THIS_TAG"));
    } catch (error) {
      return next(error);
    }
  }

  // 没有找到标签
  if (!tag) {
    try {
      const data = await createTag({ name });
      tag = { id: data.insertId };
    } catch (error) {
      return next(error);
    }
  }

  //给内容贴上标签
  try {
    await creatPostTag(parseInt(postId, 10), tag.id);

    //做出响应
    response.sendStatus(201);
  } catch (error) {
    return next(error);
  }
};

/**
 * 删除内容标签
 */
export const destroyPostTag = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // 准备数据
  const { postId } = request.params;
  const { tagId } = request.body;

  // 移除内容标签
  try {
    await deletePostTag(parseInt(postId, 10), tagId);

    response.sendStatus(200);
  } catch (error) {
    next(error);
  }
};
