const express = require("express");
const {
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const checkAuth = require("../middleware/checkAuth");
const { validatorCreateTask } = require("../validators/taskValidator");
const router = express.Router();

router.post("/todos", checkAuth, validatorCreateTask, createTask);

router.put("/todos/:id", checkAuth, validatorCreateTask, updateTask);

router.delete("/todos/:id", checkAuth, deleteTask);

module.exports = router;
