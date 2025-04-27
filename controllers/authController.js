const { usersModel } = require("../models");
const handleHttpError = require("../utils/handleError");
const { encrypt, comparePassword } = require("../utils/handlePassword");
const { generateToken } = require("../utils/handleToken");

const userRegister = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //Se verifica si existe un usuario con el emial ingresado
    const userExist = await usersModel.findOne({
      where: {
        email: email,
      },
    });

    //Se existe se retorna un error indicando la existencia de un usuario con el mismo email
    if (userExist) {
      return handleHttpError(res, "ERROR_USER_EXIST", 400);
    }

    //Si no existe, se procede a registrar el usuario
    //Se encripta la contraseña del usuario
    const hashPassword = await encrypt(password);

    //Se crea el nuevo usuario
    const newUser = {
      name: name,
      email: email,
      password: hashPassword,
    };

    await usersModel.create(newUser);

    //Se genera token de autenticación para devolver en la respuesta
    const token = await generateToken(newUser);

    res.status(201).json({ token: token });
  } catch (error) {
    console.log("Error durante el registro del usuario: ", error);
    handleHttpError(res, "ERROR_USER_REGISTER", 500);
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    //Se verifica la existencia del usuario con el email recibido
    const user = await usersModel.findOne({
      where: { email: email },
    });

    if (!user) {
      return handleHttpError(res, "ERROR_USER_NOT_FOUND", 404);
    }

    //Si existe se compara la contraseña del usuario con el hash
    const checkPassword = await comparePassword(password, user.password);

    if (!checkPassword) {
      return handleHttpError(res, "ERROR_INVALID_PASSWORD", 400);
    }

    //Una vez válido el usuario se genera el token de autenticación
    const token = await generateToken(user);

    res.status(200).json({ token: token });
  } catch (error) {
    console.log("Error al loguerse: ", error);
    handleHttpError(res, "ERROR_USER_LOGIN", 500);
  }
};

module.exports = { userRegister, userLogin };
