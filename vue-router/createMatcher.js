import createRouteMap from './create-router-map.js'
export default function createMatcher(routes) {
    console.log(routes,"createMatcher")
    let {pathList,pathMap}  = createRouteMap(routes)
    function match(url) {
        let component =   pathMap.includes(url) && pathMap(url)
        return component ?component :void 0
    }
    function addRoutes(routes) {
        createRouteMap(routes,pathList,pathMap)
    }
    return {
        match ,
        addRoutes
    }
}
