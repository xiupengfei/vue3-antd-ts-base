import '@/styles/var/index.less'
import { createApp } from 'vue'
import App from '@/App.vue'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'
import { setupSvgIcon } from '@/icons'
import { setupAntd } from '@/vendor/antd'
// import 'ant-design-vue/dist/antd.less'
import '@/styles/index.less'

(async () => {
  const app = createApp(App)

  setupStore(app)

  setupRouter(app)

  setupSvgIcon(app)

  setupAntd(app)

  app.mount('#root')
})()
