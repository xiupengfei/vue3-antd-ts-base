import type { AppRouteRecordRaw, AppRouteModule } from '@/router/types';

import DefaultLayout from '@/layouts/default/index.vue'
import NotFound from '@/views/common/404/index.vue'

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

// export const RootRoute: AppRouteRecordRaw = {
//   path: '/',
//   name: 'Root',
//   redirect: PageEnum.BASE_HOME,
//   meta: {
//     title: 'Root',
//   },
// };

export const asyncRoutes = [...routeModuleList];


// 不需要验证权限的页面
export const constantRoutes = [{
  path: '/redirect',
  name: 'Redirect',
  component: DefaultLayout,
  meta: {
    title: 'Redirect',
    hidden: true,
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: 'Redirect',
      component: () => import('@/views/common/redirect/index.vue'),
      meta: {
        title: 'Redirect',
        hidden: true,
      },
    },
  ],
},
{
  path: '/',
  component: DefaultLayout,
  redirect: '/dashboard',
},
...routeModuleList,
{
  path: '/:path(.*)*',
  name: 'ErrorPage',
  component: DefaultLayout,
  meta: {
    title: 'ErrorPage',
    hidden: true,
  },
  children: [
    {
      path: '/:path(.*)*',
      name: 'NotFound',
      component: NotFound,
      meta: {
        title: 'NotFound',
        hidden: true,
      },
    },
  ],
}];
