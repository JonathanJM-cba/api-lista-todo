const express = require("express");
const { userRegister } = require("../controllers/authController");
const router = express.Router();

router.post("/register", userRegister);

module.exports = router;
