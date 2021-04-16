import type { RouteRecordRaw } from 'vue-router';
import { RoleEnum } from '@/enums/roleEnum';

import { defineComponent } from 'vue';

export type Component<T extends any = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

type Recordable<T = any> = {
  [x: string]: T;
}

export interface RouteMeta {
  // title
  title: string;
  // role info
  roles?: RoleEnum[];
  // Whether not to cache
  ignoreKeepAlive?: boolean;
  // Is it fixed on tab
  affix?: boolean;
  // icon on tab
  icon?: string;
  // Hide menu
  hidden?: boolean;
}

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
}

// export type AppRouteModule = RouteModule | AppRouteRecordRaw;
export type AppRouteModule = AppRouteRecordRaw;
