/**
 * Modelo que representa las tareas
 */

const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/postgres");
const Users = require("./users");

const Tasks = sequelize.define(
  "Tasks",
  {
    id: {
      type: DataTypes.INTEGER(11),
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
  },
  {
    tableName: "tasks",
    timestamps: true,
  }
);

Tasks.belongsTo(Users, {
  foreignKey: "taskId",
});

module.exports = Tasks;
