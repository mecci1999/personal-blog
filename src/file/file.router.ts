import express from "express";
import * as fileMiddleware from "./file.middleware";
import * as fileController from "./file.controller";
import { authGuard } from "../auth/auth.middleware";
import { fileInterceptor } from "./file.middleware";

const router = express.Router();

/**
 * 上传图片
 */
router.post("/images/upload", authGuard, fileInterceptor, fileController.store);

/**
 * 图片服务
 */
router.get("/images/serve", fileController.serve);

/**
 * 删除图片
 */
router.delete("/images/:fileId", authGuard, fileController.destory);

/**
 * 获取图片列表
 */
router.get('/images', authGuard, fileController.index)

/**
 * 默认导出接口
 */
export default router;
