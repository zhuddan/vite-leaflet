import type { RouteRecordRaw } from 'vue-router';

// 动态路由
export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: 'layer-group-collision',
    meta: {
      title: 'layer.group.collision',
    },
    component: () => import('@/views/pages/layer-group-collision/index.vue'),
  },
];
