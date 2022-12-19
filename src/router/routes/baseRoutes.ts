import type { RouteRecordRaw } from 'vue-router';
import { asyncRoutes } from './asyncRoutes';

export const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/home.vue'),
    children: [
      {
        path: '/',
        meta: {
          title: 'Home',
          auth: false,
        },
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/lp',
    component: () => import('@/layouts/default.vue'),
    redirect: '/lp/layer-group-collision',
    children: asyncRoutes,
  },
  {
    path: '/:path(.*)',
    meta: {
      title: '404 not-find',
    },
    component: () => import('@/views/error/404.vue'),
  },
];
