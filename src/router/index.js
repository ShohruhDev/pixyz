import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Portfolio from '../views/Portfolio.vue'
import Service from '../views/Service.vue'
import About from '../views/About.vue'
import AboutUs from '../views/AboutUs.vue'

Vue.use(VueRouter)

const routes = [{ path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio
    },
    {
        path: '/service',
        name: 'service',
        component: Service
    },
    {
        path: '/about',
        name: 'about',
        component: About,

    },
    {
        path: '/aboutus',
        component: AboutUs,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router