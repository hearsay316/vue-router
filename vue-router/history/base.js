export const createRoute = (record,location)=>{
    let matched = []
    if(record){
         while (record){
             matched.unshift(record)
             record = record.parent
         }
    }
    return {
        ...location,
        matched
    }
}

export default class History {
    constructor(router) {
        this.router = router
        // 代表的记录
        // {
        //     path:"/"
        // } 这个current 是一个普通值,他的变化不会更新
        this.current = createRoute(null,{
            path:"/"
        })

    }
    // 获取路径匹配路径,当路径变化时候变 <router-view>
    transitionTo(location,complete){
        let current = this.router.match(location)
        console.log(current)
        // 匹配的资源和路径都是相同的,就不要再次跳转了
        if(this.current.path === location && this.current.matched.length===current.matched.length){
            return
        }
        this.current = current
        this.cb&&this.cb(current)
        complete&&complete()
    }
    listen(cb){
        this.cb = cb
    }

}
