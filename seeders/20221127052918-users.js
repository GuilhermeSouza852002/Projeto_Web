'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
          username: 'Ornstein',
          useremail: 'DrangonSlayer@gmail.com',
          password: 'abcd'
      },
      {
          username: 'Artorias',
          useremail: 'TheAbyssWalker@gmail.com',
          password: 'abcd'
      },
      {
          username: 'Ciaran',
          useremail: 'LordsBlade@gmail.com',
          password: 'abcd'
      },
      {
          username: 'Gough',
          useremail: 'HawkeyeGough@gmail',
          password: 'abcd'
      }
    ], {});
 
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('users', null, {});

  }
};