import Vue from 'vue'
import VueRouter from 'vue-router'

// pages
import Home from '../pages'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            component: Home,
            name: "home"
        },
        {
            path: '/news',
            component: () => import('../pages/news'),
            name: "news"
        }
    ]
})

export default router