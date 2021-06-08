import '@/styles/var/index.less'
import 'normalize.css'
import { createApp } from 'vue'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'
import { setupSvgIcon } from '@/icons'
import { setupAntd } from '@/vendor/antd'
import App from '@/App.vue'
// import 'ant-design-vue/dist/antd.less'
import '@/styles/index.less'
;(async () => {
  const app = createApp(App)

  setupStore(app)

  setupRouter(app)

  setupSvgIcon(app)

  setupAntd(app)

  app.mount('#root')
})()
