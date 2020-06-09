import VueRouter from "../vue-router";
import Vue from "vue";
import Home from "../view/home";
import About from "../view/about";

let routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
    children: [
      {
        path: "",
        component: Home,
      },
    ],
  },
];
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  setTimeout(() => {
    next();
  }, 2000);
});
export default router;
