import express from "express";
import cors from 'cors';
import { ALLOW_ORIGIN } from "./app.config";
import UserRouter from '@/user/user.router';
import PostRouter from '@/post/post.router';
import authRouter from '@/auth/auth.router';
import avatarRouter from '@/avatar/avatar.router';
import { defaultErrorHandler } from './app.middleware'
import { currentUser } from "../auth/auth.middleware";

/**
 * 创建应用
 */
const app = express();

/**
 * 跨域资源共享
 */
app.use(
  cors({
    origin: ALLOW_ORIGIN
  })
);

/**
 * 处理 JSON 文件
 */
app.use(express.json());

/**
 * 当前用户
 */
app.use(currentUser);

/**
 * 应用路由
 */
app.use(UserRouter, PostRouter, authRouter, avatarRouter);

/**
 * 默认异常处理器
 */
app.use(defaultErrorHandler);

/**
 * 默认导出
 */
export default app;