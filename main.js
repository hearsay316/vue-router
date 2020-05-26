import Vue from 'vue'
import App from './app.vue'
import router from "./route/index.js"
new Vue({
    name:'root',
    el:"#app",
    router,
    render:(h)=>h(App)
})
