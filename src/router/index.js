import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Help from '@/views/Help.vue'
import Auth from "@/views/Auth";
import store from "@/store";
// import auth from "@/store/modules/auth.module";

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'main',
      auth: true
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
      layout: 'main',
      auth: true
    },
    component: Help,
  },
  {
    path: '/auth',
    name: 'Auth',
    meta: {
      layout: 'auth',
      auth: false
    },
    component: () => import('@/views/Auth') //lazy-loading - будет подружаться только при вызове

  },
  {
    path: '/request/:id',
    name: 'Request',
    component: () => import('../views/Request.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next)=>{
  const requireAuth = to.meta.auth

  if (requireAuth && store.getters['auth/isAuthenticated']){
    next()
  } else if (requireAuth && !store.getters['auth/isAuthenticated']){
    next('/auth?message=auth')
  } else {
    next()
  }
})

export default router
