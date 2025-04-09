'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tareas', [
      {
        titulo: 'Comprar pan',
        estado: 'pendiente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Estudiar para la entrevista',
        estado: 'en progreso',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Subir portafolio a GitHub',
        estado: 'terminada',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tareas', null, {});
  }
};
