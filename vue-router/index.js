import install from "./install";
import createMatcher from './create-matcher.js'
import BrowserHistory from "./history/browserHistory";
import HashHistory from "./history/hashHistory";
class VueRouter{
    constructor(option){
        const {routes} = option
        console.log(routes,'Install-Module oh-my-posh -Scope CurrentUser')
        this.matcher = createMatcher(routes||[]);
        // 创建历史管理
        this.mode = option.mode||"hash";
        switch (this.mode){
            case "hash":
                this.history = new HashHistory(this)
                break;
            case "history":
                this.history = new BrowserHistory(this)
                break;
        }

    }
    init(app){
        console.log(app)
        const history = this.history;
        console.log(history)
        const setupHashListener = ()=>{
            history.setupListener();
        }
        // 跳转路径 会根据匹配来操作
        history.transitionTo(history.getCurrentLocation(),setupHashListener)
        // transitionTo 跳转
        // setupHashListener hash 才有的
    }
}

VueRouter.install = install
export default VueRouter
