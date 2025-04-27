const express = require("express");
const { userRegister, userLogin } = require("../controllers/authController");
const { validatorAuthRegister } = require("../validators/authValidator");
const router = express.Router();

router.post("/register", validatorAuthRegister, userRegister);

router.post("/login", userLogin);

module.exports = router;
