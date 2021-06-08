<template>
  <a-sub-menu v-bind="$attrs">
    <template #title>
      <span>
        <svg-icon class="svg-icon" :name="menu?.meta?.icon" />
        <span v-show="!sidebar.collapsed">{{ menu?.meta?.title }}</span>
      </span>
    </template>
    <template v-if="!sidebar.collapsed">
      <template v-for="item in menu.children">
        <template v-if="Array.isArray(item.children)">
          <sub-menu :menu="item" :key="item.name" />
        </template>
        <template v-else>
          <sub-menu-item :key="item.name" :item="item" />
        </template>
      </template>
    </template>
  </a-sub-menu>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useStore } from 'vuex'
import type { AppRouteRecordRaw } from '@/router/interface'
import { IAppState } from '@/store/modules/app'
import SubMenuItem from './sub-menu-item.vue'

export default defineComponent({
  name: 'SubMenu',
  components: {
    SubMenuItem,
  },
  props: {
    menu: {
      type: Object as PropType<AppRouteRecordRaw>,
      default: () => ({}),
    },
  },
  setup() {
    const store = useStore<{ app: IAppState }>()
    return {
      sidebar: store.state.app.sidebar,
    }
  },
})
</script>
<style lang="less" scoped>
.svg-icon {
  margin-right: 10px;
}
</style>
