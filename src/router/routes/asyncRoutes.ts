import type { RouteRecordRaw } from 'vue-router';

// 动态路由
export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: 'layer-group-collision',
    meta: {
      title: 'layer.group.collision',
      link: 'https://github.com/MazeMap/Leaflet.LayerGroup.Collision',
    },
    component: () => import('@/views/pages/layer-group-collision/index.vue'),
  },
  {
    path: 'leaflet-geoserver-request',
    meta: {
      title: 'leaflet-geoserver-request',
      link: 'https://github.com/iamtekson/leaflet-geoserver-request',
    },
    component: () => import('@/views/pages/leaflet-geoserver-request/index.vue'),
  },
];
