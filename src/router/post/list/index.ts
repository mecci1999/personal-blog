import { RouteRecordRaw } from 'vue-router';
import PostArticle from '@/views/post/list/index.vue';

/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  {
    name: 'postArticle',
    path: '/article',
    component: PostArticle,
  },
];

/**
 * 默认导出
 */
export default routes;
