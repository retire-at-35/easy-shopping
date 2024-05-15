import '@/styles/common.scss'
import {
  createApp
} from 'vue'
import {
  createPinia
} from 'pinia'
import '@/mock/index'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App)
app.use(createPinia())
app.use(router)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.mount('#app')