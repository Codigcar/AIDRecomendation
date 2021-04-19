'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('Patients',[
       {
        id : 1,
        userId : 2,
        DNI : '12345678',
        Sexo : 'H',
        Apellido : 'testPaciente',
        Nombre : 'testPaciente',
        Edad : '44',
       
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id : 2,
        userId : 4,
        DNI : '123123123',
        Sexo : 'H',
        Apellido : 'admin',
        Nombre : 'admin',
        Edad : '44',
       
        createdAt: new Date(),
        updatedAt: new Date()
       }
     ])

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Patients', null, {});

  }
};
