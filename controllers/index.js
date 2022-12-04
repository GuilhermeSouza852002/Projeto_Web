const postersController = require('./postersController');
const homeController = require('./homeController');
const usuariosController = require('./usuariosController');

const controllers = {
    posters: postersController,
    users: usuariosController,
    home: homeController
}

module.exports = controllers;