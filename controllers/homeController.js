const {Router} = require('express');

const roteador = Router();

roteador.get('/', async(req, res)=>{

    res.status(200).render('home');
});

module.exports = roteador;