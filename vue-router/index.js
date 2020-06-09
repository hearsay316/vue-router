import install from "./install";
import createMatcher from "./create-matcher.js";
import BrowserHistory from "./history/browserHistory";
import HashHistory from "./history/hashHistory";
class VueRouter {
  constructor(option) {
    const { routes } = option;
    this.matcher = createMatcher(routes || []);
    // 创建历史管理
    this.mode = option.mode || "hash";
    switch (this.mode) {
      case "hash":
        this.history = new HashHistory(this);
        break;
      case "history":
        this.history = new BrowserHistory(this);
        break;
    }
    this.beforeHooks = [];
  }
  match(location) {
    return this.matcher.match(location);
  }
  init(app) {
    const history = this.history;
    const setupHashListener = () => {
      history.setupListener();
    };
    // 跳转路径 会根据匹配来操作
    history.transitionTo(history.getCurrentLocation(), setupHashListener);
    history.listen((route) => {
      app._route = route;
    });
    //
    // transitionTo 跳转
    // setupHashListener hash 才有的
  }
  push(location) {
    const history = this.history;
    window.location.hash = location;
  }
  beforeEach(fn) {
    this.beforeHooks.push(fn);
  }
}

VueRouter.install = install;
export default VueRouter;
