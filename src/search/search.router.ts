import express from "express";
// import { accessLog } from "../access-log/access-log.middleware";
import * as searchController from "./search.controller";

/**
 * 定义路由
 */
const router = express.Router();

/**
 * 搜索标题
 */
router.get(
  "/search",
  // accessLog({
  //   action: 'searchTags',
  //   resourceType: 'search',
  //   payloadParam: 'query.name',
  // }),
  searchController.index
);

/**
 * 默认导出
 */
export default router;
