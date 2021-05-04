<template>
  <div>
    <h5>测试嵌套</h5>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Menu',
  components: {},
  setup() {
    return {}
  },
})
</script>
