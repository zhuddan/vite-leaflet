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
  {
    path: 'leaflet-bing-layer',
    meta: {
      title: 'leaflet-bing-layer',
      link: 'https://github.com/digidem/leaflet-bing-layer',
    },
    component: () => import('@/views/pages/leaflet-bing-layer/index.vue'),
  },
  {
    path: 'yn',
    meta: {
      title: 'yn',
      link: 'https://github.com/digidem/yn',
    },
    component: () => import('@/views/pages/yn/index.vue'),
  },
  {
    path: 'home-button',
    meta: {
      title: 'home-button',
      link: 'https://github.com/digidem/home-button',
    },
    component: () => import('@/views/pages/home-button/index.vue'),
  },
];
