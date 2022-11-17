const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/connectionDB").sequelize;

const B = sequelize.define(
  "B",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER,
      allowNull: false,
    },
    Bname_Department: {
      type: DataTypes.STRING,
    },
    bId:{
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

module.exports = B;
