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
      path: '/login',
      name: 'Login',
      component: () => import ("../views/UserLoginView.vue")
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import ("../views/UserRegisterView.vue")
    },
    {
      path: '/tsp',
      name: 'tsp',
      component: () => import ("../views/TspImagineView.vue")
    }
  ]
})

export default router
