import Vue from 'vue'
import VueRouter from 'vue-router'

// pages
import Home from '../pages'
import News from '../pages/news/news.vue'
import Contacts from '../pages/contacts/contacts.vue'

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
            component: News,
            name: "News"
        },
        {
            path: '/contacts',
            component: Contacts,
            name: "Contacts"
        }
    ]
})

export default router