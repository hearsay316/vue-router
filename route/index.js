import VueRouter from "../vue-router";
import Vue from 'vue'
import Home from '../view/home'
import About from '../view/about'

let routes = [
    {
        path: "/",
        component: Home
    }, {
        path: '/about',
        component: About
    }
]
Vue.use(VueRouter)
export default new VueRouter({
    routes
})
