const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/connectionDB").sequelize;

const D = sequelize.define(
  "D",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER,
      allowNull: false,
    },
    Dname_Salary: {
      type: DataTypes.STRING,
    },
    dId:{
      type:DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate:"CASCADE",
      references:{
          model:"a",
          key: "id",
  }
    }
  },
  // {
  //   freezeTableName: true,
  // }
);

module.exports = D;
