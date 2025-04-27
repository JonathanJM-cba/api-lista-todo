/**
 * Modelo que representa la tabla de usuarios
 */

const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/postgres");

const Users = sequelize.define(
  "Users",
  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        len: {
          args: [5, 255],
        },
      },
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

module.exports = Users;
