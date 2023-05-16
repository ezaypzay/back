'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      this.hasMany(models.Task, {
        foreignKey: 'employeeId',
        as: 'tasks',
      });
    }
  };
  Employee.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    department: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};