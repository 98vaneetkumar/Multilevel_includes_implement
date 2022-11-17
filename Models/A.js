const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/connectionDB").sequelize;

const A = sequelize.define(
  "A",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER,
      allowNull: false,
    },
    Aname_user: {
      type: DataTypes.STRING,
    }
  },
  // {
  //   freezeTableName: true,
  // }
);

module.exports = A;
