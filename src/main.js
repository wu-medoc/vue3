import { createApp } from 'vue'
import App from './App.vue'

import { VueSvgIconPlugin } from '@yzfe/vue3-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

const app = createApp(App)
app.mount('#app')
// app.use(VueSvgIconPlugin, { tagName: 'svg' }).mount('#app')