import Url from "url";
import UserController from "./controller/UserController.js";

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
  ];

  static getResponse(req) {
    const requestUrl = Url.parse(req.url);
    const route = this.getRoute(requestUrl.pathname);
    const callback = this.getAction(route, requestUrl.pathname);
    const body = callback();
    return body;
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
