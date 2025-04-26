/**
 * Archivo configuración BD postgres
 */

const { Sequelize } = require("sequelize");

require("dotenv").config();

const nameDB = process.env.DB_NAME;
const userDB = process.env.DB_USER;
const passwordDB = process.env.DB_PASSWORD;
const hostDB = process.env.DB_HOST;
const portDB = process.env.DB_PORT;

const sequelize = new Sequelize({
  database: nameDB,
  username: userDB,
  password: passwordDB,
  host: hostDB,
  port: portDB,
  dialect: "postgres",
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("CONECTADO A LA DB POSTGRES");
  } catch (error) {
    console.log("Error al intentar conectar con la DB: ", error);
  }
};

module.exports = { sequelize, dbConnection };
