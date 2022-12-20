import { createApp } from 'vue'
import router from '@/router'
import { plugin, defaultConfig } from '@formkit/vue'


import App from './App.vue'

createApp(App)
.use(plugin, defaultConfig) // FormKit
.use(router) // router
.mount('#app')