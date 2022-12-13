const { Poster, User } = require('../models');
const { Router } = require('express');

const roteador = Router();
//CRUD - Create, Read, Update, Destroy
//em REST
roteador.get('/posters', async (req, res) => {

    const publicacoes = await Poster.findAll({
        include: [
            { model: User }
        ]
    });

    publicacoes.username = publicacoes.User?.username;
    publicacoes.gameName = publicacoes.User?.gameName;
    res.render('posters/index', { publicacoes });
});

roteador.get('/novo', (req, res) => {
    res.render('posters/novo');
});

roteador.get('/:id', async (req, res) => {
    const { id } = req.params;
    let publicacao = await Poster.findByPk(id, {
        include: [{ model: User }]
    });

    res.render('posters/apresenta', { publicacao });
});

roteador.get('/:id/edit', async (req, res) => {
    const { id } = req.params;
    let publicacao = await Poster.findByPk(id);
    res.render('posters/edit', { publicacao });
});

roteador.post('/posters', async (req, res) => {
    const { username, poster, gameName } = req.body;

    const { id } = await User.findOne({
        where: { username: username }
    });

    if (!id) {
        res.send('<h1>Usuário não encontrado</h1>');
    } else {
        const userId = id;
        await Poster.create({ username, poster, gameName, userId });
        res.redirect('/publicacoes/posters');
    }

});


roteador.patch('/:id', async (req, res) => {

    const poster = req.body.poster;
    const gameName = req.body.gameName;

    await Poster.update(
        { poster, gameName },
        {
            where: { id: req.params.id }
        }
    );

    res.redirect('/publicacoes/posters');
});

roteador.delete('/:id', async (req, res) => {

    await Poster.destroy(
        {
            where: { id: req.params.id }
        }
    );

    res.redirect('/publicacoes/posters');
});

module.exports = roteador;