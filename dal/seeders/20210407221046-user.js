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
     return queryInterface.bulkInsert('Users',[
       // doctor por default
       {
        id : 1,
        Usuario : 'testDoctorFantasma',
        Correo : 'testDoctorFantasma',
        Contrasenia : 'testDoctorFantasma',
        Rol : 2,
        PalabraSecreta : 'testDoctorFantasma',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id : 2,
        Usuario : 'testUsuario',
        Correo : 'testUsuario',
        Contrasenia : 'testUsuario',
        Rol : 1,
        PalabraSecreta : 'testUsuario',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id : 3,
        Usuario : 'testDoctor',
        Correo : 'testDoctor',
        Contrasenia : 'testDoctor',
        Rol : 2,
        PalabraSecreta : 'testDoctor',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id : 4,
        Usuario : 'testAdmin',
        Correo : 'testAdmin',
        Contrasenia : 'testAdmin',
        Rol : 3,
        PalabraSecreta : 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
       },
     ])

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});

  }
};
