import { createRouter, createWebHistory } from 'vue-router';
import appRoutes from './app/index';
import postRoutes from './post/index';
import aboutRoutes from './about/index';
import commentRoutes from './comment/index';
import tagsRoutes from './tags/index';
import categoryRoutes from './category/index';
import articleRoutes from './post/list/index';

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...appRoutes,
    ...postRoutes,
    ...aboutRoutes,
    ...commentRoutes,
    ...tagsRoutes,
    ...categoryRoutes,
    ...articleRoutes,
  ],
});

/**
 * 默认导出
 */
export default router;
