/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      priorityLevel: {
        type: Sequelize.STRING
      },
      completionStatus: {
        type: Sequelize.BOOLEAN
      },
      employeeId: { //Oops forgot to add this haha
        type: Sequelize.INTEGER,
        references: {
          model: 'Employees', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: { //I had these at first but I don't even think I need them
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: { //I'm afraid there will be a bug if I delete them though :(
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tasks');
  }
};