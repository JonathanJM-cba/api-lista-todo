const { check } = require("express-validator");
const validateResult = require("../utils/handleValidator");

const validatorCreateTask = [
  check("title")
    .exists()
    .withMessage("El campo title debe existir")
    .notEmpty()
    .withMessage("El campo title no debe estar vacío")
    .isString()
    .withMessage("El campo title debe ser un string")
    .isLength({ max: 255 })
    .withMessage("El campo title no debe superar los 255 caracteres"),
  check("description")
    .exists()
    .withMessage("El campo description debe existir")
    .notEmpty()
    .withMessage("El campo description no debe estar vacío")
    .isString()
    .withMessage("El campo description debe ser un string")
    .isLength({ max: 255 })
    .withMessage("El campo description no debe superar los 255 caracteres"),
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

module.exports = { validatorCreateTask };
