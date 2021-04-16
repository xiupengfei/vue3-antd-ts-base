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

export default defineComponent({
  name: 'Demo1',
  components: {},
  setup() {
    const store = useStore<{ app: IAppState }>()

    return {
      sidebar: store.state.app.sidebar
    }
  }
})
</script>
