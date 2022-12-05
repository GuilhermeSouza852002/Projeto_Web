const {Router} = require('express');

const roteador = Router();

roteador.get('/', async(req, res)=>{
    logado = req.session.login
    res.status(200).render('usuario/home', {logado});
});

module.exports = roteador;