let  Vue = null;
class VueRouter{
    constructor(option){
        const {routes} = option
        console.log(routes,'Install-Module oh-my-posh -Scope CurrentUser')
    }
}
VueRouter.install = function (_Vue) {
    Vue = _Vue
    Vue.component('router-link',{
        render(){
            return <a>{this.$slots.default}</a>
        }
    })
    Vue.component('router-view',{
        render(){
            return <a>{this.$slots.default}</a>
        }
    })
    console.log(_Vue,"s")
    // install 会定义全部的内容  , 组件 指令  原型
}
export default VueRouter
