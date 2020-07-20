import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/map'
},
{
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{
        path: '/uikit',
        name: 'uikit',
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        component: () => import('../views/UIkitDemo.vue')
    },
    {
        path: '/touchtest',
        name: 'touchtest',
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        component: () => import('../views/touchtest.vue')
    },
    {
        path: '/map',
        name: 'map',
        component: () => import( /* webpackChunkName: "map" */ '../views/map.vue')
    }],
}];



const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;