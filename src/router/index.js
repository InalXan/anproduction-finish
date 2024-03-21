import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    // Iron Work
    {
      path: '/ironwork',
      name: 'ironwork',
      component: () => import('../views/IHomeView.vue')
    },
    // furniture
    {
      path: '/furniture',
      name: 'furniture',
      component: () => import('../views/FHomeView.vue')
    }
  ]
})

export default router
