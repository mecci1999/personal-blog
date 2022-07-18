import { RouteRecordRaw } from 'vue-router';
import AppCategory from '@/views/category/index.vue';

/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  {
    name: 'postCategory',
    path: '/category/:typeId',
    component: AppCategory,
    props: true,
  },
];

/**
 * 默认导出
 */
export default routes;
