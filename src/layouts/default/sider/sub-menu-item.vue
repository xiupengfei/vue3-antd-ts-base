<template>
  <a-menu-item>
    <router-link :to="{ name: item.name }">
      <svg-icon class="svg-icon" :name="item?.meta?.icon" />
      <span> {{ item.meta.title }}</span>
    </router-link>
  </a-menu-item>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { AppRouteRecordRaw } from '@/router/interface'

export default defineComponent({
  name: 'SubMenuItem',
  props: {
    item: {
      type: Object as PropType<AppRouteRecordRaw>,
      default: () => ({}),
    },
  },
  setup() {
    return {}
  },
})
</script>
<style lang="less" scoped>
.svg-icon {
  margin-right: 10px;
}
</style>
