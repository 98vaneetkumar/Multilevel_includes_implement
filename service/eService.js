const Model = require("../models");

exports.addUser = (data) => {
  return Model.E.create(data);
};

exports.getuser=(data)=>{
  return Model.E.findAll()
}