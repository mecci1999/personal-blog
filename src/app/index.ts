import express from "express";
import cors from 'cors';
import { ALLOW_ORIGIN } from "./app.config";

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
)

/**
 * 处理 JSON 文件
 */
app.use(express.json())

/**
 * 应用路由
 */

/**
 * 默认异常处理器
 */

/**
 * 默认导出
 */
export default app;