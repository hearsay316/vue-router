export default function createRouterMap( routes, oldList=[], oldMap={}){
    console.log()
    let pathList = oldList;
    let pathMap = oldMap;
    routes.forEach(route=>{
        addRouteRecord(route,pathList,pathMap)
    })
    return {
        pathList,pathMap
    }
}
function addRouteRecord(router, pathList, pathMap){
    let path = router.path;
    let record = {
        path,
        component:router.component
    }
    pathMap[path] = record
    //pathList.push
}
