import './assets/main.css'

import App from './App.vue'

import { createApp } from 'vue'
import StartPage  from './pages/StartPage.vue'
import MainPage  from './pages/MainPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const pinia = createPinia()

const routes = [
  { path: '/', name: 'StartPage', component: StartPage },
  { path: '/main', name: 'MainPage', component: MainPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(autoAnimatePlugin)
app.mount('#app')
