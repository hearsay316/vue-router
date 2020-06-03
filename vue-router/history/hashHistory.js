import History from "./base";
const ensureSlash = ()=>{
    if(window.location.hash){
        return
    }
    window.location.hash = '/'
}
export default class HashHistory extends History{
    constructor(router){
        super(router);
        this.router = router;
        ensureSlash();
        console.log("hash")
        console.log(this.transitionTo("ddd"))
    }
    getCurrentLocation(){
        return window.location.hash.slice(1)
    }
    setupListener(){
        window.addEventListener("hashchange",()=>{
            console.log("hash变化")
            // 执行匹配操作 this 是
            this.transitionTo(this.getCurrentLocation())
        })
    }
}
