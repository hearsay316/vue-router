export default class History {
    constructor(router) {
        console.log(router);
        this.router = router
    }
    transitionTo(location,complete){
        console.log(location,"做匹配")
        complete&&complete()
    }

}
