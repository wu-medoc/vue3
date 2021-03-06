import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

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

import store from './store'

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

const app = createApp(App).use(store).use(router)

components.forEach(component => {
  app.component(component.name, component)
})

plugins.forEach(plugin => {
  app.use(plugin, { size: 'small', zIndex: 3000 })
})

app.use(router).mount('#app')
// app.use(VueSvgIconPlugin, { tagName: 'svg' }).mount('#app')
