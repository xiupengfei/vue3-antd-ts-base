import type { App } from 'vue'
import SvgIcon from '@/icons/SvgIcon.vue'

export const setupSvgIcon = (app: App) => {
  app.component('SvgIcon', SvgIcon)
}
