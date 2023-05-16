const { Task } = require('../models');

const getAllTasks = async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};

const createTask = async (req, res) => {
  const newTask = await Task.create(req.body);
  res.json(newTask);
};

const getTaskById = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if(!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
};

const updateTask = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if(!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  await task.update(req.body);
  res.json(task);
};

const deleteTask = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if(!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  await task.destroy();
  res.json({ message: 'Task deleted' });
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask
};