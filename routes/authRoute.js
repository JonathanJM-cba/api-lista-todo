const express = require("express");
const { userRegister, userLogin } = require("../controllers/authController");
const {
  validatorAuthRegister,
  validatorAuthLogin,
} = require("../validators/authValidator");
const router = express.Router();

router.post("/register", validatorAuthRegister, userRegister);

router.post("/login", validatorAuthLogin, userLogin);

module.exports = router;
