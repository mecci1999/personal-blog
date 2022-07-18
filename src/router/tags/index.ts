import { RouteRecordRaw } from 'vue-router';
import AppTags from '@/views/tags/index.vue';

/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  {
    name: 'postTags',
    path: '/tags/:tagId',
    component: AppTags,
    props: true,
  },
];

/**
 * 默认导出
 */
export default routes;
