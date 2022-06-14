import express from 'express';
import * as postController from './post.controller';


const router = express.Router();

/**
 * 用户登录
 */
router.post(
  '/post/create',
  postController.store,
);


/**
 * 默认导出路由
 */
export default router;