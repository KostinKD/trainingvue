import {createRouter,createWebHistory} from 'vue-router'
import HomePage from "@/views/HomePage";
import ReUse from "@/views/ReUse";
import VuexPage from "@/views/VuexPage";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomePage},
        {path: '/reuse', component: ReUse},
        {path: '/vuex', component: VuexPage}
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})