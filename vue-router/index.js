import install from "./install";
import createMatcher from './createMatcher.js'
class VueRouter{
    constructor(option){
        const {routes} = option
        console.log(routes,'Install-Module oh-my-posh -Scope CurrentUser')
    this.matcher = createMatcher(routes)
    }
    init(app){
        console.log(app)
    }
}

VueRouter.install = install
export default VueRouter
