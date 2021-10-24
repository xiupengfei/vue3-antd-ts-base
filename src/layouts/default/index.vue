<template>
  <a-layout class="default-layout">
    <SiderComponent />
    <a-layout>
      <HeaderComponent />
      <a-layout-content class="main-container">
        <router-view>
          <template #default="{ Component, route }">
            <transition name="fade" mode="out-in" appear>
              <!-- <keep-alive>
                <component :is="Component" :key="route.fullPath" />
              </keep-alive> -->
              <component :is="Component" :key="route.fullPath" />
            </transition>
          </template>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SiderComponent from './sider/index.vue'
import HeaderComponent from './header/index.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    SiderComponent,
    HeaderComponent,
  },
  setup() {
    return {}
  },
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
.main-container {
  margin: 16px;
  padding: 16px;
  min-height: 280px;
}
</style>
