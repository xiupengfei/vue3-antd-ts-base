<template>
  <section id="app" :class="[state.dark ? 'theme-dark' : 'theme-light']">
    <router-view />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
// import HelloWorld from '@/components/HelloWorld.vue'

// import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld
  },
  setup() {
    const store = useStore()
    // console.log(store.state)
    // const value = ref<string>('abc')
    return {
      state: store.state,
    }
  },
})
</script>

<style lang="less" scoped>
#app {
  height: 100%;
}
</style>
