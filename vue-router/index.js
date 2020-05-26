import install from "./install";

class VueRouter{
    constructor(option){
        const {routes} = option
        console.log(routes,'Install-Module oh-my-posh -Scope CurrentUser')
    }
}

VueRouter.install = install
export default VueRouter
