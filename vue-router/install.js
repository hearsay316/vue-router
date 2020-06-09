import routerLink from "./comonents/router-link";
import routerView from "./comonents/router-view";
let Vue = null;
const install = function (_Vue) {
  Vue = _Vue;
  Vue.component("router-link", routerLink);
  Vue.component("router-view", routerView);
  // install 会定义全部的内容  , 组件 指令  原型
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, "_route", this._router.history.current);
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot;
      }
    },
  });
  Object.defineProperty(Vue.prototype, "$route", {
    // 存的属性
    get() {
      return this["_routerRoot"]._route;
    },
  });
  Object.defineProperty(Vue.prototype, "$router", {
    // 存的属性
    get() {
      return this["_routerRoot"]._router;
    },
  });
};

export default install;
