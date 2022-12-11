'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('posters', [
            {
                userId: 1,
                poster: 'lol that is so funny!'
            },
            {
                userId: 2,
                poster: 'I like to go birdwatching with my dog'
            },
            {
                userId: 3,
                poster: 'Plz delete your account, Todd'
            },
            {
                userId: 4,
                poster: 'woof woof woof'
            }
        ], {});

    },

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('posters', null, {});

    }
};