export default function createRouterMap( routes, oldList=[], oldMap={}){
    let pathList = oldList;
    let pathMap = oldMap;
    routes.forEach(route=>{
        addRouteRecord(route,pathList,pathMap)
    })
    return {
        pathList,pathMap
    }
}
function addRouteRecord(router, pathList, pathMap,parentRecord){
    let path = parentRecord?`${parentRecord.path}/${router.path}`:router.path;
    let record = {
        path,
        component:router.component,
        parent:parentRecord
    }
    if(!pathMap[path]){
        // 防止路有重复的, 不许覆盖,直接用于原来的
        pathMap[path] = record
        pathList.push(path)
    }
    if(router.children){
        router.children.forEach(r=>{
            addRouteRecord(r,pathList,pathMap)
        })
    }
}
