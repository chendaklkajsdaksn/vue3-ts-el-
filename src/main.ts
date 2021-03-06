import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import {store,key} from './store/index'
import plugins from './plugin/index'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/packages/theme-chalk/src/base.scss'

const app = createApp(App)
app.use(router).use(store,key).use(plugins)
app.mount('#app')
