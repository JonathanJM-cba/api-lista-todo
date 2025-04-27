const { sequelize } = require("../config/postgres");
const Tasks = require("./tasks");
const Users = require("./users");

const models = {
  usersModel: require("./users"),
  tasksModel: require("./tasks"),
};

//Definición de las asociaciones
Users.hasMany(Tasks, {
  foreignKey: "userEmail",
  sourceKey: "email",
});

Tasks.belongsTo(Users, {
  foreignKey: "userEmail",
  targetKey: "email",
});

sequelize.sync({ force: false });

module.exports = models;
