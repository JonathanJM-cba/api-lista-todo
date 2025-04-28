const express = require("express");
const { createTask } = require("../controllers/taskController");
const checkAuth = require("../middleware/checkAuth");
const { validatorCreateTask } = require("../validators/taskValidator");
const router = express.Router();

router.post("/todos", checkAuth, validatorCreateTask, createTask);

module.exports = router;
