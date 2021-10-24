<template>
  <a-layout-header>
    <a-row type="flex">
      <a-col flex="40px">
        <menu-unfold-outlined v-if="collapsed" @click="handleClick" />
        <menu-fold-outlined v-else @click="handleClick" />
      </a-col>
      <a-col flex="auto"></a-col>
    </a-row>
  </a-layout-header>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { IAppState } from '@/store/modules/app'

export default defineComponent({
  name: 'Header',
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    // console.log(props, ctx)
    const store = useStore<{ app: IAppState }>()
    const collapsed = ref<boolean>(store.state.app.sidebar.collapsed)

    const handleClick = () => {
      collapsed.value = !collapsed.value

      store.dispatch('app/toggleSidebar', collapsed.value)
    }

    return {
      collapsed,
      handleClick,
    }
  },
})
</script>
<style lang="less" scoped></style>
