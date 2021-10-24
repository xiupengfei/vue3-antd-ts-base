<!--
 * @Descripttion: 
 * @Version: v0.1
 * @Author: pengfei.xiu
 * @Date: 2021-10-24 13:43:02
 * @LastEditors: pengfei.xiu
 * @LastEditTime: 2021-10-24 14:30:30
-->
<template>
  <a-menu-item :key="item.name">
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
