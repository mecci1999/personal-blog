import { fileFilter } from "@/file/file.middleware";
import { Request, Response, NextFunction } from "express";
import multer from "multer";
import path from "path";

/**
 * 验证内容状态
 */
export const validatePostStatus = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { status: statusFromQuery = "" } = request.query;
  const { status: statusFromBody = "" } = request.body;

  const status = statusFromQuery || statusFromBody;

  const isValidStatus = ["published", "draft", "archived", ""].includes(
    `${status}`
  );

  if (!isValidStatus) {
    next(new Error("BAD_REQUEST"));
  } else {
    next();
  }
};

/**
 * 文件过滤器
 */
const postBgImgUploadFilter = fileFilter([
  "image/png",
  "image/jpg",
  "image/jpeg",
]);

/**
 * 创建一个Multer
 */
const avatarUpload = multer({
  dest: "uploads/postBgImg", // 博客封面存放地址
  fileFilter: postBgImgUploadFilter,
});

/**
 * 文件拦截器
 */
export const postBgImgInterceptor = avatarUpload.single("postBgImg");

// /**
//  * 头像处理器
//  */
//  export const postBgImgProcessor = async (
//   request: Request,
//   response: Response,
//   next: NextFunction,
// ) => {
//   // 准备文件信息
//   const { file } = request;
//   const destination = file?.destination;
//   const fileName = file?.filename;

//   //下一步
//   next();
// };
