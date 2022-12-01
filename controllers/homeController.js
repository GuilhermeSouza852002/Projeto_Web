const {Router} = require('express');

const roteador = Router();

roteador.get('/', async(req, res)=>{

    res.status(200).render('home', {logado});
});

module.exports = roteador;