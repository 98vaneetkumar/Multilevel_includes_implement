const Model = require("../models");

exports.addUser = (data) => {
  return Model.C.create(data);
};

exports.getuser=(data)=>{
  return Model.C.findAll()
}