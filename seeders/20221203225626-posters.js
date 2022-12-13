'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('posters', [
            {
                userId: 1,
                poster: 'Missão 1',
                gameName: 'Dark Souls 1'
            },
            {
                userId: 2,
                poster: 'Missão 2',
                gameName: 'Dark Souls 2'
            },
            {
                userId: 3,
                poster: 'Missão 3',
                gameName: 'Dark Souls 3'
            },
            {
                userId: 4,
                poster: 'Missão 4',
                gameName: 'Elden Ring'
            }
        ], {});

    },

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('posters', null, {});

    }
};