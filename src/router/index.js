import { createRouter, createWebHistory } from 'vue-router'
import loginView from "@/views/LoginView";
import ForgetView from "@/views/ForgetView";
import DashboardView from "@/views/DashboardView";
import MailView from "@/views/MailView";
import AppEmailBody from "@/components/AppEmailBody";


const routes = [
  {
    path: '/login',
    name: 'login',
    component: loginView,
    alias: '/'
  },
  {
    path: '/forget',
    name: 'forget',
    component: ForgetView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/mail',
    name: 'mail',
    component: MailView,
    props: true,
    children: [
        {path: ':mailId?', component: AppEmailBody, props: true}
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
