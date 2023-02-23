const { B } = require("../models");
const Model = require("../models");

exports.addUser = (data) => {
  return Model.A.create(data);
};

// Model.A.hasMany(Model.B)
// Model.A.hasMany(Model.C)
// Model.A.hasMany(Model.D)
// Model.A.hasMany(Model.E)
Model.A.hasOne(Model.B);
// Model.B.belongsTo(Model.A);
Model.A.hasOne(Model.C);
// Model.C.belongsTo(Model.A);
Model.A.hasOne(Model.D);
// Model.D.belongsTo(Model.A);
Model.A.hasOne(Model.E);
// Model.E.belongsTo(Model.A);

exports.getuser = (data) => {
  return new Promise((resolve, reject) => {
    let include = {};
    (include = [                                              // Apply isDeleted=0 only for this include
      { model: Model.B, attributes: ["id", "Bname_Department"] ,required:false,separate: true, where: { isDeleted: 0 }},
      { model: Model.C, attributes: ["id", "Cname_Education"],required:false,separate: true, where: { isDeleted: 0 } },
      { model: Model.D, attributes: ["id", "Dname_Salary"],required:false,separate: true, where: { isDeleted: 0 } },
      { model: Model.E, attributes: ["id", "Ename_Address"] ,required:false,separate: true, where: { isDeleted: 0 }},
    ]),
      Model.A.findAndCountAll({
        attributes: ["id", "Aname_user"],
        include: include,
      })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
  });
};

exports.getusers = (data) => {
  return Model.A.findAll({
    attributes: ["id", "Aname_user"],
    include: [
      { model: Model.B, attributes: ["id", "Bname_Department"] },
      { model: Model.C, attributes: ["id", "Cname_Education"] },
      { model: Model.D, attributes: ["id", "Dname_Salary"] },
      { model: Model.E, attributes: ["id", "Ename_Address"] },
    ],
  });
};
