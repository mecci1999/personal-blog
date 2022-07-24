import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import _ from "lodash";
import {
  deleteFileById,
  deletePostFiles,
  getFileById,
  getFileByName,
  uploadImage,
} from "./file.service";

/**
 * 上传图片文件
 */
export const store = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { post } = request.query;

  const postId = parseInt(`${post}`, 10);

  // 头像文件信息
  const fileInfo = _.pick(request.file, [
    "originalname",
    "mimetype",
    "filename",
    "size",
  ]);

  try {
    //保存数据
    const data = await uploadImage({
      ...fileInfo,
      postId,
    });

    //做出响应
    response.status(201).send(data);
  } catch (error) {
    next(error);
  }
};

/**
 * 文件服务
 */
export const serve = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // 用户 ID
  const { name } = request.query;

  try {
    // 根据文件名获取文件信息
    const file = await getFileByName(`${name}`);
    console.log(file);

    //文件名和目录
    let root = path.join("uploads", "image");

    // 检查文件是否存在
    const fileExist = fs.existsSync(path.join(root, `${file.filename}`));

    if (!fileExist) throw new Error("FILE_NOT_FOUND");

    //做出响应
    response.sendFile(`${file.filename}`, {
      root,
      headers: {
        "Content-Type": file.mimetype,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const destory = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // 获取参数
  const { fileId } = request.params;

  try {
    // 根据文件Id删除文件
    const file = await getFileById(parseInt(`${fileId}`, 10));

    // 删除相关文件
    await deletePostFiles([file]);

    // 删除数据
    const data = await deleteFileById(parseInt(`${fileId}`, 10));

    response.send(data);
  } catch (error) {}
};
