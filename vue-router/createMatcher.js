import createRouteMap from './create-router-map.js'
export default function createMatcher(routes) {
    console.log(routes,"createMatcher")
    let {pathList,pathMap}  = createRouteMap(routes)
    function match() {

    }
    function addRoutes() {

    }
    return {
        match,
        addRoutes
    }
}
