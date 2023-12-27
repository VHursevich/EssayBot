module.exports = class UserDto {
  username;
  id;
  credit;
  date;

  //telegram никнейм
  constructor(model) {
    this.username = model.username;
    this.id = model._id;
    this.credit = model.credit;
    this.date = model.date;
  }
};
