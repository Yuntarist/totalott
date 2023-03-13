/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookie from 'vue-cookies'

const app = createApp(App)
app.config.globalProperties.$VueCookie = VueCookie
app.use(store).use(router).mount('#app')
// app.config.globalProperties.$cookeok 

