const { validationResult } = require("express-validator");

const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(400).send({ errors: error.array() });
  }
};

module.exports = validateResult;
