const express = require("express");
const {
  createTask,
  updateTask,
  deleteTask,
  getAllTasks,
  getPaginationAllTasks,
  getTaskById,
  getSearchTasks,
} = require("../controllers/taskController");
const checkAuth = require("../middleware/checkAuth");
const { validatorCreateTask } = require("../validators/taskValidator");
const router = express.Router();

router.post("/todos", checkAuth, validatorCreateTask, createTask);

router.put("/todos/:id", checkAuth, validatorCreateTask, updateTask);

router.delete("/todos/:id", checkAuth, deleteTask);

router.get("/todos", checkAuth, getAllTasks);

router.get("/todos/paginado", checkAuth, getPaginationAllTasks);

router.get("/todos/buscar", checkAuth, getSearchTasks);

router.get("/todos/:id", checkAuth, getTaskById);

module.exports = router;
