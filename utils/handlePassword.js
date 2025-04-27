const bcrypt = require("bcryptjs");
const saltRounds = 10;

/**
 * Función para encriptar contraseña de usuario
 * @param {String} plainPassword - Pasar la contraseña a encriptar
 * @returns - Retorna la contraseña encriptada
 */
const encrypt = async (plainPassword) => {
  return await bcrypt.hash(plainPassword, saltRounds);
};

/**
 * Función para comparar contraseñas planas y encriptadas
 * @param {String} plainPassword - Pasar la contraseña en texto plano
 * @param {String} hashPassword - Pasar la contraseña encriptada
 * @returns {Promise} - Retorna una promesa
 */
const comparePassword = async (plainPassword, hashPassword) => {
  return await bcrypt.compare(plainPassword, hashPassword);
};

module.exports = { encrypt, comparePassword };
