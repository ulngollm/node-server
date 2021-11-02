import Url  from "url";
import UserController from "./controller/UserController.js";
import GroupController from "./controller/GroupController.js";

export default class Router {
  static routes = [
    {
      route: /\/users\/?$/,
      callback: UserController.getList,
    },
    {
      route: /\/users\/(\d*)/,
      callback: UserController.findOneById,
    },
    {
      route: /\/groups\/?$/,
      callback: GroupController.getList,
    },
    {
      route: /\/groups\/(\d*)/,
      callback: GroupController.findOneById,
    },
  ];

  static getResponse(req) {
    const requestUrl = Url.parse(req.url);
    console.log(requestUrl);
    const endpoint = requestUrl.pathname;
    const route = this.getRoute(endpoint);
    if(route){
      const callback = this.getAction(route, endpoint);
      const body = callback();
      return body;
    }
    else return;
  }

  static getRoute(url) {
    const currentRoute = this.routes.find((item) => {
      return item.route.test(url);
    });
    return currentRoute;
  }

  static getAction(route, url) {
    const param = url.replace(route.route, "$1");
    const callback = route.callback;
    return callback.bind(this, param);
  }
}
