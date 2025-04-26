/**
 * Modelo que representa la tabla de usuarios
 */

const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/postgres");
const Tasks = require("./tasks");

const Users = sequelize.define(
  "Users",
  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

Users.hasMany(Tasks, {
  as: "tasks",
  foreignKey: "taskId",
});

module.exports = Users;
