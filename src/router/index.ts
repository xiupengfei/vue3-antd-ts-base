import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';
import { constantRoutes } from './routes';

const WHITE_NAME_LIST = ['Redirect'];

// app router
const router = createRouter({
  history: createWebHashHistory('/'),
  routes: (constantRoutes as unknown) as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// reset router
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

// config router
export const setupRouter = (app: App) => {
  app.use(router)
}

export default router;
