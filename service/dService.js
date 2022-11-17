const Model = require("../models");

exports.addUser = (data) => {
  return Model.D.create(data);
};

exports.getuser=(data)=>{
  return Model.D.findAll()
}