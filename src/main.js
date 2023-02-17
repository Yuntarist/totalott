import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import * as mongodb from './mongodb'
import * as mongoose from 'mongoose'
import * as axios from 'axios'

const app = createApp(App)
// app.config.globalProperties.$mongodb = mongodb
app.config.globalProperties.$mongoose = mongoose
app.config.globalProperties.$axios = axios
createApp(App).use(store).use(router).mount('#app')
