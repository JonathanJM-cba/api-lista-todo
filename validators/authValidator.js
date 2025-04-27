const { check } = require("express-validator");
const validateResult = require("../utils/handleValidator");

//Validaciones para el registro del usuario
const validatorAuthRegister = [
  check("name")
    .exists()
    .withMessage("El campo name debe existir")
    .notEmpty()
    .withMessage("El campo name no debe estar vacío")
    .isString()
    .withMessage("El campo name es un string")
    .isLength({ max: 255 })
    .withMessage("El campo name no debe superar los 255 caracteres"),
  check("email")
    .exists()
    .withMessage("El campo email debe existir")
    .notEmpty()
    .withMessage("El campo email no debe estar vacío")
    .isEmail()
    .withMessage("El campo email debe estar en formato email")
    .normalizeEmail()
    .isLength({ max: 255 })
    .withMessage("El campo email no debe superar los 255 caracteres"),
  check("password")
    .exists()
    .withMessage("El campo password debe existir")
    .notEmpty()
    .withMessage("El campo password no debe estar vacío")
    .isString()
    .withMessage("El campo password debe ser un string")
    .isLength({ min: 5, max: 255 })
    .withMessage("El campo password debe contener entre 5 y 255 caracteres"),
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

module.exports = { validatorAuthRegister };
