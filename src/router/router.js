import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home/home.vue';
import About from '../views/about/about.vue';
import Service from '../views/service/service.vue';
import Register from '../views/register/register.vue';


const routes= [
    {path:'/', component: Home},
    {path:'/home', component: Home},
    {path:'/about', component: About},
    {path:'/service', component: Service},
    {path:'/register', component: Register},
];

const router =createRouter({
    history:createWebHistory(),
    routes
})

export default router;