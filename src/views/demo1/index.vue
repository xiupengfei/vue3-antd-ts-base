<template>
  <div>
    <div>Demo1: {{ sidebar.collapsed }}</div>
    <div>
      <svg-icon name="404" />
    </div>
    <a-button type="primary">Primary Button11</a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>
    <div class="test">测试主题色</div>
    <JsxComVue />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { IAppState } from '@/store/modules/app'
// import styles from './style.module.less'
import JsxComVue from './JsxCom'

export default defineComponent({
  name: 'Demo1',
  components: { JsxComVue },
  setup() {
    const store = useStore<{ app: IAppState }>()
    // console.log(import.meta.env)
    // console.log(styles)
    return {
      sidebar: store.state.app.sidebar,
    }
  },
})
</script>
<style lang="less" scoped>
.test {
  color: @primary-color;
}
</style>
