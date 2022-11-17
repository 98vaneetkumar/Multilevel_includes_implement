const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/connectionDB").sequelize;

const C = sequelize.define(
  "C",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER,
      allowNull: false,
    },
    Cname_Education: {
      type: DataTypes.STRING,
    },
    cId:{
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

module.exports = C;
