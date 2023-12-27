const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  credit: {
    type: Number,
    required: true,
  },
  
  date: {
    type: Date,
    required: true,
  },
/*
  tgUsername: {
    type: String,
    required: false,
  },*/
});

module.exports = model("User", UserSchema);
