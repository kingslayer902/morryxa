import './assets/main.css'
import 'aos/dist/aos.css' // ⬅️ Import style AOS

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import AOS from 'aos' // ⬅️ Import AOS

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Inisialisasi AOS (harus setelah mount)
AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-in-out',
})
