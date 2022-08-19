import { createRouter, createWebHistory } from 'vue-router'
import loginView from "@/views/LoginView";
import ForgetView from "@/views/ForgetView";
import DashboardView from "@/views/DashboardView";
import MailView from "@/views/MailView";
import AppEmailBody from "@/components/AppEmailBody";
import notFound from "@/views/NotFound";


// const MailView = () => import('./views/MailView')

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
    component: ForgetView,
    meta: {
      cantEnter: true
    }
  },
  {
    path: '/dashboard',
    name: 'home',
    component: DashboardView,
    beforeEnter(){
      console.log('before')
    }
  },
  {
    path: '/mail',
    name: 'email',
    component: MailView,
    props: true,
    children: [
        {path: ':mailId?', component: AppEmailBody, props: true}
    ]
  },
  {
    path: '/:notFound(.*)', component: notFound
  }
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


router.beforeEach((to,from,next)=> {
  console.log('beforeeach')
  if (to.meta.cantEnter === true){
    next({
      name: 'home'
    })
  } else {
    next()
  }

  console.log(to)
  console.log(from)
  console.log(next)

  next()
})

router.afterEach((to,from)=> {

})

export default router
