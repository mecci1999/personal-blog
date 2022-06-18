import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import appRouter from './router/index'

createApp(App).use(ElementPlus).use(appRouter).mount('#app')
