export default class Group{
  static groupList = [
    { id: 1, name: "Admin"},
    { id: 2, name: "Buyers"},
    { id: 3, name: "Moderators"}
  ];

  static create(body) {
    groupList.push(body);
  }

  static find() {
    return this.groupList;
  }

  static findOneById(id) {
    return this.groupList.find((item) => item.id == id);
  }

  static findByIdAndUpdate(id, body) {
    const elem = this.groupList.filter((item) => {
      item.id == id;
    });
  }
}
