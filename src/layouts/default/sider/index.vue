<template>
  <a-layout-sider
    :collapsed="sidebar.collapsed"
    :trigger="null"
    width="200"
    breakpoint="lg"
    collapsed-width="80"
    :collapsible="false"
    @breakpoint="onBreakpoint"
  >
    <div class="logo" />
    <a-menu
      v-model:selected-keys="selectedKeys"
      v-model:openKeys="openKeys"
      theme="dark"
      mode="inline"
    >
      <template v-for="item in routes" :key="item.name">
        <template v-if="Array.isArray(item.children)">
          <sub-menu :key="item.name" :menu="item" />
        </template>
        <template v-else>
          <sub-menu-item :key="item.name" :item="item" />
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { IAppState } from '@/store/modules/app'
// import useParentRoutes from '@/hooks/core/useParentRoutes'

import { asyncRoutes } from '@/router/routes'
import SubMenu from './sub-menu.vue'
import SubMenuItem from './sub-menu-item.vue'

export default defineComponent({
  name: 'Sider',
  components: {
    SubMenu,
    SubMenuItem,
  },
  setup() {
    const store = useStore<{ app: IAppState }>()
    const route = useRoute()
    // const parentRoutes = useParentRoutes()
    const parentRoutes = route.matched.filter((matched) => matched.name !== route.name)
    const onBreakpoint = (broken: boolean) => {
      console.log(broken)
    }

    // const state = reactive<any>({
    //   routes: asyncRoutes,
    // })

    const sidebar = store.state.app.sidebar

    return {
      selectedKeys: ref<string[]>([route.name as string]),
      openKeys: ref<string[]>(sidebar.collapsed ? [] : parentRoutes.map((r) => r.name as string)),
      routes: ref<any>(asyncRoutes),
      onBreakpoint,
      sidebar,
    }
  },
})
</script>
<style lang="less" scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
