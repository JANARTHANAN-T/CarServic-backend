const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  company:String,
  year:String,
  lat:String,
  long:String,
  password: String,
  joinedOn: {
    type: Date,
    default: Date.now,
  },  
});

module.exports = mongoose.model("User", userSchema);
