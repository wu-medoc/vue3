import { createApp } from 'vue'
import App from './App.vue'

import '@yzfe/svgicon/lib/svgicon.css'

import 'element-plus/lib/theme-chalk/index.css'
import {
  ElButton,
  ElSelect,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification
} from 'element-plus'

const components = [
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

app.mount('#app')
// app.use(VueSvgIconPlugin, { tagName: 'svg' }).mount('#app')
