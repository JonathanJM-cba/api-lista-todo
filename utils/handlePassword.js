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

module.exports = { encrypt };
