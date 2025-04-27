/**
 * Modelo que representa las tareas
 */

const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/postgres");

const Tasks = sequelize.define(
  "Tasks",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    userEmail: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "tasks",
    timestamps: true,
  }
);

module.exports = Tasks;
