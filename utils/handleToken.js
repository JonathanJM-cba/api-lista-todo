const jwt = require("jsonwebtoken");
require("dotenv").config();

const llaveMaestra = process.env.LLAVE_MAESTRA;

/**
 * Función para generar token de autenticación
 * @param {Object} user - Pasar el objeto usuario para generar y firmar el token de autenticación
 * @returns {String} - Retorna token de autenticación
 */
const generateToken = async (user) => {
  try {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      llaveMaestra,
      {
        expiresIn: "2h",
      }
    );
    return token;
  } catch (error) {
    console.log("Error al generar token de autenticación: ", error);
  }
};

/**
 * Función para verificar el token de autenticación del usuario
 * @param {String} token - Pasar el token a verificar
 * @returns {Promise} - Retorna una promise
 */
const verifyToken = async (token) => {
  try {
    return await jwt.verify(token, llaveMaestra);
  } catch (error) {
    console.log("Error al verificar el token del usuario: ", error);
  }
};

module.exports = { generateToken, verifyToken };
