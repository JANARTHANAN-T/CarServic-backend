const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    name:String,
    mobile:String,
    email:String,
    problem:String,
    location:String,
  joinedOn: {
    type: Date,
    default: Date.now,
  },  
});

module.exports = mongoose.model("Service", serviceSchema);
