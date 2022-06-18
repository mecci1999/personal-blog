import { createRouter, createWebHistory } from 'vue-router';
import appRoutes from './app/index';

/**
 * 创建路由
 */
const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...appRoutes
    ],
});

/**
 * 默认导出
 */
export default router;