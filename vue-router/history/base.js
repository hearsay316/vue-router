export const createRoute =  (record,location)=>{
    let matched = []
    console.log(record)
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
        console.log(router);
        this.router = router
        // 代表的记录
        // {
        //     path:"/"
        // }
        this.current = createRoute(null,{
            path:"/"
        })
    }
    // 获取路径匹配路径,当路径变化时候变 <router-view>
    transitionTo(location,complete){
        let route = this.router.match(location)
        console.log(route)
        complete&&complete()
    }

}
