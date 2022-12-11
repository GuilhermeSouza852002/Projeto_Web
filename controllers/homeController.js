const { Router } = require('express');

const roteador = Router();

roteador.get('/', async (req, res) => {
    logado = req.session.login
    usuarioLogado = req.session.usuarioLogado
    res.status(200).render('usuario/home', { logado, usuarioLogado });
});

module.exports = roteador;