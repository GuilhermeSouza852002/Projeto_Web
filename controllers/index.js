//const postsController = require('./postsController');
const homeController = require('./homeController');
const usuariosController = require('./usuariosController');

const controllers = {
    //posts: postsController,
    users: usuariosController,
    home: homeController
}

module.exports = controllers;