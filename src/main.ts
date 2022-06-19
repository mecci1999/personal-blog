import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import appRouter from './router/index'
import appStore from './store/index'

createApp(App).use(ElementPlus).use(appRouter).use(appStore).mount('#app')
