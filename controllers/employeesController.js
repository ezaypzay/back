const { Employee } = require('../models');

exports.getAllEmployees = async (req, res) => {
  const employees = await Employee.findAll();
  res.json(employees);
};

exports.createEmployee = async (req, res) => {
  const newEmployee = await Employee.create(req.body);
  res.json(newEmployee);
};

exports.getEmployeeById = async (req, res) => {
  const employee = await Employee.findByPk(req.params.id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: "Employee not found" });
  }
};

exports.updateEmployee = async (req, res) => {
  const updatedEmployee = await Employee.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  if (updatedEmployee[0] === 0) {
    res.status(404).json({ error: "Employee not found" });
  } else {
    res.json(updatedEmployee);
  }
};

exports.deleteEmployee = async (req, res) => {
  const deletedEmployee = await Employee.destroy({
    where: {
      id: req.params.id,
    },
  });
  if (deletedEmployee === 0) {
    res.status(404).json({ error: "Employee not found" });
  } else {
    res.json({ message: "Employee deleted" });
  }
};