<template>
  <section id="app">
    <router-view />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

// import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    // const store = useStore()
    // console.log(store.state)
    const value = ref<string>('abc')
    return {
      value
    }
  }
})
</script>

<style lang="less" scoped>
#app {
  height: 100%;
}
</style>