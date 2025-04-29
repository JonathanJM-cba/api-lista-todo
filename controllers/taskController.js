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
    res.status(201).json({
      id: newTask.id,
      title: newTask.title,
      description: newTask.description,
    });
  } catch (error) {
    console.log("Error al intentar crear una nueva tarea: ", error);
    handleHttpError(res, "ERROR_CREATE_TASK", 500);
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const { email } = req.user;
  try {
    //Se verifica si existe la tarea
    const task = await tasksModel.findByPk(id);

    if (!task) return handleHttpError(res, "ERROR_TASK_NOT_FOUND", 404);

    //Se verifica si esa tarea pertenece al usuario correcto
    if (task.userEmail !== email)
      return handleHttpError(res, "ERROR_NO_PERMISSIONS_UPDATE_TASK", 403);

    //Caso contrario se actualiza la tarea
    const taskData = {
      title: title,
      description: description,
    };

    const updatedTask = await task.update(taskData);
    res.status(200).json({
      id: updatedTask.id,
      title: updatedTask.title,
      description: updatedTask.description,
    });
  } catch (error) {
    console.log("Error al intentar actualizar la tarea: ", error);
    handleHttpError(res, "ERROR_UPDATE_TASK", 500);
  }
};

module.exports = { createTask, updateTask };
