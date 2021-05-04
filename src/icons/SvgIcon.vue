<template>
  <svg v-if="name" :class="svgClass" v-bind="$attrs" :style="{ color: color }">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      default: '',
      // required: true
    },
    color: {
      type: String,
      default: '',
    },
  },
  setup({ name }) {
    const iconName = computed(() => `#icon-${name}`)
    const svgClass = computed(() => {
      if (name) {
        return `svg-icon icon-${name}`
      }
      return 'svg-icon'
    })
    return { iconName, svgClass }
  },
})
</script>

<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
