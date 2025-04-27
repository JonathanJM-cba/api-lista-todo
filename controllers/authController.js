const { usersModel } = require("../models");
const handleHttpError = require("../utils/handleError");
const { encrypt } = require("../utils/handlePassword");
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

module.exports = { userRegister };
