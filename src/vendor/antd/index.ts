import type { App } from 'vue'
import {
  Button,
  Layout,
  Menu,
} from 'ant-design-vue'

export const setupAntd = (app: App) => {
  app
    .use(Layout)
    .use(Menu)
    .use(Button)
}
