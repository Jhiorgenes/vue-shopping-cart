import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import Cart from './views/Cart.vue'
import Home from './views/Home.vue'
import App from './App.vue'
const pinia = createPinia()
const app = createApp(App)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(pinia)
app.use(router)
app.mount('#app')
