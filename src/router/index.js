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
      path: '/Login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
      children: [
        {
            path:'login',
            name: 'login',
            component: () => import('../components/Login.vue')
        },
        {
            path:'singup',
            name: 'singup',
            component: () => import('../components/SingUp.vue')
            
        }
      ]
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/Options',
      name: 'Options',
      component: () => import('../views/OptionsView.vue')
    }
  ]
})

export default router
