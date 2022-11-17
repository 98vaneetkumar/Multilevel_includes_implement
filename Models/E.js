const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/connectionDB").sequelize;

const E = sequelize.define(
  "E",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER,
      allowNull: false,
    },
    Ename_Address: {
      type: DataTypes.STRING,
    },
    eId:{
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

module.exports = E;
