import routerLink from './comonents/router-link'
import routerView from './comonents/router-view'
let Vue = null
const install = function (_Vue) {
    Vue = _Vue
    Vue.component('router-link',routerLink)
    Vue.component('router-view',routerView)
    console.log(_Vue,"s")
    // install 会定义全部的内容  , 组件 指令  原型
    Vue.mixin({
        beforeCreate(){
            console.log("name",this.$options.name)
            if(this.$options.router){
                console.log('根组件',this.$options.name)
                this._routerRoot = this
                this._router = this.$options.router
            }else{
                this._routerRoot = this.$parent && this.$parent._routerRoot
                console.log('儿子',this.$options.name)
            }
            console.log( this._routerRoot._router)
        }
    })
}
export default install
