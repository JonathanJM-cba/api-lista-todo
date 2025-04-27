const express = require("express");
const { userRegister } = require("../controllers/authController");
const { validatorAuthRegister } = require("../validators/authValidator");
const router = express.Router();

router.post("/register", validatorAuthRegister, userRegister);

module.exports = router;
