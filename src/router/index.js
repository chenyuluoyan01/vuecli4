import Vue from 'vue'
import VueRouter from 'vue-router'
import TenderPage from '../views/Tender.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'zhaobiao',
        component: TenderPage
    },
    {
        path: '/home',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
        path: '/tenderDetail',
        name: 'tenderDetail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/tenderDetail')
    },
    {
        path: '/userInfo',
        name: 'userInfo',
        component: () => import('../components/userInfo/userInfo'),
        redirect: '/userInfo/release',
        children: [
            {
                path: 'release',
                name: 'release',
                component: () => import('../components/userInfo/release'),
            }
        ]
    },
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
