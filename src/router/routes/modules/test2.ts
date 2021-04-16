import type { AppRouteModule } from '@/router/types';

import DefaultLayout from '@/layouts/default/index.vue'

const test: AppRouteModule = {
  path: '/test2',
  name: 'Test2',
  component: DefaultLayout,
  redirect: '/test/menu1',
  meta: {
    icon: 'windows',
    title: 'Test2',
  },
  children: [{
    path: 'menu11',
    name: 'menu11',
    component: () => import('@/views/menu/subs/menu1.vue'),
    meta: {
      title: 'menu1',
    },
  }]
};

export default test;
