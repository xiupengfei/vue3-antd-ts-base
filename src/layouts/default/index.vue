<template>
  <a-layout class="default-layout">
    <SiderComponent />
    <a-layout>
      <HeaderComponent />
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <RouterView>
          <template #default="{ Component, route }">
            <transition name="fade" mode="out-in" appear>
              <!-- <keep-alive>
                <component :is="Component" :key="route.fullPath" />
              </keep-alive> -->
              <component :is="Component" :key="route.fullPath" />
            </transition>
          </template>
        </RouterView>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import SiderComponent from './sider/index.vue'
import HeaderComponent from './header/index.vue'

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SiderComponent,
    HeaderComponent
  },
  setup() {
    const onBreakpoint = (broken: boolean) => {
      console.log(broken)
    }
    return {
      selectedKeys: ref<string[]>(['2']),
      collapsed: ref<boolean>(false),
      onBreakpoint
    }
  }
})
</script>
<style lang="less" scoped>
.default-layout {
  height: 100%;
}
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>

