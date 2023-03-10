import '@/style/index.scss';

import router, { setupRouter } from '@/router';
import { setupRouterGuard } from '@/router/setupRouterGuard';
import { setupStore } from '@/store';
import App from './App.vue';
import { registerPlugins } from './plugins';
import { initStore } from './store/initStore';

function __init__() {
  const app = createApp(App);
  // app.use(head);
  // 注册 store
  setupStore(app);
  // 初始化 store
  initStore();
  // 注册路由
  setupRouter(app);
  // 路由拦截
  setupRouterGuard(router);
  // 插件
  registerPlugins(app);

  app.mount('#app');
}

__init__();
