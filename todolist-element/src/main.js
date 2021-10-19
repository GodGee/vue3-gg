import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { ElButton } from 'element3'
import 'element3/lib/theme-chalk/index.css'

createApp(App).use(store).use(ElButton).mount('#app')