/**
 * Función para el manejo personalizado de errorres Http
 * @param {*} res - Pasar la respuesta al cliente
 * @param {String} message - Pasar el mensaje de error http
 * @param {Integer} code - Pasar el código de error http
 */
const handleHttpError = (res, message, code = 403) => {
  res.status(code).json({ error: message });
};

module.exports = handleHttpError;
