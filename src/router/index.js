import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkDetailView from '../views/WorkDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/work/:slug',
    name: 'work-detail',
    component: WorkDetailView
  },
  {
    path: '/:catchAll(.*)', // fallback biar gak error page putih
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // scroll ke atas tiap ganti halaman
    return { top: 0 }
  }
})

export default router
