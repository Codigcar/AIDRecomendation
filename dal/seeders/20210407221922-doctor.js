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
     return queryInterface.bulkInsert('Doctors',[
       {
        id : 1,
        userId : 1,
        DNI : '12345678',
        Sexo : 'H',
        Apellido : 'testDoctorFantasma',
        Nombre : 'testDoctorFantasma',
        Edad : '44',
        Especialidad : 'testDoctorFantasma',
        Colegiatura : 'testDoctorFantasma',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id : 2,
        userId : 3,
        DNI : '12345678',
        Sexo : 'H',
        Apellido : 'testDoctor',
        Nombre : 'testDoctor',
        Edad : '44',
        Especialidad : 'testDoctor',
        Colegiatura : 'testDoctor',
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
     await queryInterface.bulkDelete('Doctors', null, {});

  }
};
