import type { AppRouteModule } from '@/router/interface'

import DefaultLayout from '@/layouts/default/index.vue'

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: DefaultLayout,
  redirect: '/dashboard/demo1',
  meta: {
    icon: 'dashboard',
    title: 'Dashboard',
  },
  children: [
    {
      path: 'demo1',
      name: 'Demo1',
      component: () => import('@/views/demo1/index.vue'),
      meta: {
        title: 'Demo1',
        icon: 'dashboard',
      },
    },
    {
      path: 'demo2',
      name: 'Demo2',
      component: () => import('@/views/demo2/index.vue'),
      meta: {
        title: 'Demo2',
        icon: 'dashboard',
      },
    },
  ],
}

export default dashboard
