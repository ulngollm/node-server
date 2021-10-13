export default class User {
  static userList = [
    { id: 1, name: "User", group: 4 },
    { id: 2, name: "Jane", group: 1 },
    { id: 3, name: "Alice", group: 2 },
  ];

  static create(body) {
    userList.push(body);
  }

  static find() {
    return this.userList;
  }

  static findOneById(id) {
    return this.userList.find((item) => item.id == id);
  }

  static findByIdAndUpdate(id, body) {
    const elem = this.userList.filter((item) => {
      item.id == id;
    });
  }
}
