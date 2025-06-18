import { createApp } from 'vue'
import router from './router'

import App from './App.vue'
import '@/assets/css/index.scss'

const app = createApp(App).use(router)
app.mount('#app')
