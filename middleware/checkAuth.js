const { usersModel } = require("../models");
const handleHttpError = require("../utils/handleError");
const { verifyToken } = require("../utils/handleToken");

const checkAuth = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  try {
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer "))
      return handleHttpError(res, "ERROR_INVALID_AUTH_HEADER", 401);

    const token = authorizationHeader.split(" ").pop();

    if (!token) return handleHttpError(res, "ERROR_NO_TOKEN_PROVIDED", 400);

    const tokenData = await verifyToken(token);

    if (!tokenData) return handleHttpError(res, "ERROR_INVALID_TOKEN", 401);

    const user = await usersModel.findByPk(tokenData.email);

    if (!user) {
      return handleHttpError(res, "ERROR_USER_NOT_FOUND", 404);
    }

    req.user = {
      email: user.email,
      name: user.name,
    };
    next();
  } catch (error) {
    console.log("Error en la autenticación del usuario: ", error);
    handleHttpError(res, "ERROR_AUTHENTICATION_USER", 500);
  }
};

module.exports = checkAuth;
