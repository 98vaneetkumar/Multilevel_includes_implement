const Model = require("../models");

exports.addUser = (data) => {
  return Model.B.create(data);
};

exports.getuser=(data)=>{
  return Model.B.findAll()
}