import Group from "../model/Group.js";

export default class GroupController {
  static getList() {
    return Group.find();
  }
  static findOneById(id) {
    console.log({id:id});
    return Group.findOneById(id);
  }
  static findOneByIdAndUpdate(id, body) {
    return Group.findOneByIdAndUpdate(id, body);
  }
}
