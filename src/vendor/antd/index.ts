import type { App } from 'vue'
import { Button, Layout, Menu, Row, Col, Card, Switch } from 'ant-design-vue'

export const setupAntd = (app: App) => {
  app.use(Layout).use(Menu).use(Button).use(Row).use(Col).use(Card).use(Switch)
}
