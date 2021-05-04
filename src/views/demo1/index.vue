<template>
  <div>
    <div>Demo1: {{ sidebar.collapsed }}</div>
    <div>
      <svg-icon name="404" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { IAppState } from '@/store/modules/app'
import styles from './style.module.less'

export default defineComponent({
  name: 'Demo1',
  components: {},
  setup() {
    const store = useStore<{ app: IAppState }>()
    // console.log(import.meta.env)
    console.log(styles)
    return {
      sidebar: store.state.app.sidebar,
    }
  },
})
</script>
