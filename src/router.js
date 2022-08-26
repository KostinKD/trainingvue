import {createRouter,createWebHistory} from 'vue-router'
import HomePage from "@/views/HomePage";
import ReUse from "@/views/ReUse";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomePage},
        {path: '/reuse', component: ReUse}
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})