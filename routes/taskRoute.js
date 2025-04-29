const express = require("express");
const { createTask, updateTask } = require("../controllers/taskController");
const checkAuth = require("../middleware/checkAuth");
const { validatorCreateTask } = require("../validators/taskValidator");
const router = express.Router();

router.post("/todos", checkAuth, validatorCreateTask, createTask);

router.put("/todos/:id", checkAuth, validatorCreateTask, updateTask);

module.exports = router;
