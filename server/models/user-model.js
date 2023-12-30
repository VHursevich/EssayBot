const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  activationLink:{
    type:String,
  },

  credit: {
    type: Number,
    required: true,
  },
  
  date: {
    type: Date,
    default: new Date(2000, 1, 1, 1, 1, 1),
    required: true,
  },

  tg:{
    type:String,
    required:false,
    unique:true,
  }
});

module.exports = model("User", UserSchema);
