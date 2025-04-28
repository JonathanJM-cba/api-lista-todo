const { tasksModel } = require("../models");
const handleHttpError = require("../utils/handleError");

const createTask = async (req, res) => {
  const { title, description } = req.body;
  const { email } = req.user;
  try {
    const taskData = {
      title: title,
      description: description,
      userEmail: email,
    };

    const newTask = await tasksModel.create(taskData);
    res
      .status(201)
      .json({
        id: newTask.id,
        title: newTask.title,
        description: newTask.description,
      });
  } catch (error) {
    console.log("Error al intentar crear una nueva tarea: ", error);
    handleHttpError(res, "ERROR_CREATE_TASK", 500);
  }
};

module.exports = { createTask };
