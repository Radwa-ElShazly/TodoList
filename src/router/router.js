import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home/home.vue';
import About from '../views/about/about.vue';
import Service from '../views/service/service.vue';


const routes= [
    {path:'/', component: Home},
    {path:'/home', component: Home},
    {path:'/about', component: About},
    {path:'/service', component: Service},
];

const router =createRouter({
    history:createWebHistory(),
    routes
})

export default router;