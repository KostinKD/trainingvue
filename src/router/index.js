import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Help from '@/views/Help.vue'
import Auth from "@/views/Auth";

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'main'
    },
    component: Home
  },
  {
    path: '/help',
    name: 'Help',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    meta: {
      layout: 'main'
    },
    component: Help,
  },
  {
    path: '/auth',
    name: 'Auth',
    meta: {
      layout: 'auth'
    },
    component: () => import('@/views/Auth') //lazy-loading - будет подружаться только при вызове

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
