'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      this.belongsTo(models.Employee, {
        foreignKey: 'employeeId',
        as: 'employee',
      });
    }
  };
  Task.init({
    description: DataTypes.STRING,
    priorityLevel: DataTypes.INTEGER,
    completionStatus: DataTypes.BOOLEAN,
    employeeId: DataTypes.INTEGER 
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};