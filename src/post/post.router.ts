import express from "express";
import { authGuard } from "../auth/auth.middleware";
import * as postController from "./post.controller";
import { validatePostStatus, postBgImgInterceptor } from "./post.middleware";

const router = express.Router();

/**
 * 创建博客接口
 */
router.post(
  "/posts/create",
  authGuard,
  validatePostStatus,
  postController.store
);

/**
 * 获取博客列表接口
 */
router.get("/posts", authGuard, postController.index);

/**
 * 获取单个博客接口
 */
router.get("/posts/:postId", authGuard, postController.show);

/**
 * 上传博客的封面图接口
 */
router.post(
  "/posts/:postId/bgImg",
  authGuard,
  postBgImgInterceptor,
  postController.uploadPostBgImg
);

/**
 * 获取博客封面
 */
router.get("/posts/:postId/bgImg", postController.serve);

/**
 * 默认导出路由
 */
export default router;
