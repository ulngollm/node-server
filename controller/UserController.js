import User from "../model/User.js";

export default class UserController {
  static getList() {
    return User.find();
  }
  static findOneById(id) {
    console.log({id:id});
    return User.findOneById(id);
  }
  static findOneByIdAndUpdate(id, body) {
    return User.findOneByIdAndUpdate(id, body);
  }
}
