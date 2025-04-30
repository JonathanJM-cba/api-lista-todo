/**
 * Modelo que representa las tareas
 */

const { DataTypes, Op } = require("sequelize");
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
      allowNull: false,
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

/**
 * Función para buscar las tareas según titulo y descripción
 * @param {Object} searchParams - Pasar los párametros de búsqueda
 * @param {String} userEmail - Pasar el email del usuario para obtener sus tareas
 * @returns {Array<Tasks>} - Retoran las tareas que cumplen con las condiciones que de búsqueda
 */
Tasks.searchTask = function (searchParams = {}, userEmail) {
  const { title, description } = searchParams;

  const whereConditions = {
    userEmail: userEmail,
  };

  if (title) {
    whereConditions.title = { [Op.like]: `%${title}%` };
  }

  if (description) {
    whereConditions.description = { [Op.like]: `%${description}%` };
  }

  return this.findAll({
    where: whereConditions,
  });
};

module.exports = Tasks;
