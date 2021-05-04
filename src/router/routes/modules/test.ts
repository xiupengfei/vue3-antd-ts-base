import type { AppRouteModule } from '@/router/interface'

import DefaultLayout from '@/layouts/default/index.vue'

const test: AppRouteModule = {
  path: '/test',
  name: 'Test',
  component: DefaultLayout,
  redirect: '/test/menu1',
  meta: {
    icon: 'auth',
    title: 'Test',
  },
  children: [
    {
      path: 'menu1',
      name: 'menu1',
      component: () => import('@/views/menu/subs/menu1.vue'),
      meta: {
        title: 'menu1',
        icon: 'dashboard',
      },
    },
    {
      path: 'menu2',
      name: 'menu2',
      component: () => import('@/views/menu/subs/menu2.vue'),
      meta: {
        title: 'menu2',
        icon: 'dashboard',
      },
    },
    {
      path: 'menu3',
      name: 'menu3',
      component: () => import('@/views/menu/subs/menu3.vue'),
      meta: {
        title: 'menu3',
        icon: 'dashboard',
      },
    },
  ],
}

export default test
