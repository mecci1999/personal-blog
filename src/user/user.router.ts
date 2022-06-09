import express from 'express';
import { userInfo } from './user.controller';

const router = express.Router();

/**
 * 得到博主信息
 */
router.get('/user', userInfo)

/**
 * 默认导出路由
 */
export default router;