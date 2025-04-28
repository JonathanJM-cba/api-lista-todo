const express = require("express");
const { createTask } = require("../controllers/taskController");
const checkAuth = require("../middleware/checkAuth");
const router = express.Router();

router.post("/todos", checkAuth, createTask);

module.exports = router;
