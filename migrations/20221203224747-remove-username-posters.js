'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.removeColumn('posters', 'username');

  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.addColumn('posters', 'username', {
        type: Sequelize.STRING,
        allowNull: false
      });

  }
};

