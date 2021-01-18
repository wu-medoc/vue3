import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@yzfe/svgicon/lib/svgicon.css'

import 'element-plus/lib/theme-chalk/index.css'
import {
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElButton,
  ElSelect,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification
} from 'element-plus'

const components = [
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElButton,
  ElSelect,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification
]

const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification
]

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

plugins.forEach(plugin => {
  app.use(plugin, { size: 'small', zIndex: 3000 })
})

app.use(router).mount('#app')
// app.use(VueSvgIconPlugin, { tagName: 'svg' }).mount('#app')
