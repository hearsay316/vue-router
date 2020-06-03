import createRouteMap from './create-router-map.js'
import {createRoute} from "./history/base"
export default function createMatcher(routes) {
    let {pathList,pathMap}  = createRouteMap(routes)
    console.log(pathList,pathMap,'pathList')
    function match(location) {
        console.log(location,'location')
        let record = pathMap[location]
        createRoute(record,{
            path:location
        })
        // let component =   pathMap.includes(url) && pathMap(url)
        // return component ? component :void 0
    }
    function addRoutes(routes) {
        createRouteMap(routes,pathList,pathMap)
    }
    return {
        match ,
        addRoutes
    }
}
