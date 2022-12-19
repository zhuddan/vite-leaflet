import type { Router } from 'vue-router';

// import { useUserStore } from '@/store/modules/user';
// import { getToken } from '@/utils/cache';

export function setupRouterGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    next();
  });
}
