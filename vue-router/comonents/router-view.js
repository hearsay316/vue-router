export default {
  name: "router-view",
  functional: true, // 函数式组件
  render(h, { parent, data }) {
    console.log(h, parent, data);
    let depth = 0;
    let route = parent.$route;
    data.routeView = true; // 标识路由属性
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routeView) {
        depth++;
      }
      parent = parent.$parent;
    }
    console.log(depth, route);
    const record = route.matched[depth];
    if (!record) {
      return h();
    }
    return h(record.component, data);
  },
};
