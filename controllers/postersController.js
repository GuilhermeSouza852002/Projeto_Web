const {Poster, User} = require('../models');
const {Router} = require('express');

const roteador = Router();
//CRUD - Create, Read, Update, Destroy
//em REST
roteador.get('/', async(req, res)=>{
    
    const publicacoes = await Poster.findAll({
        include: [
            {model:User}
        ]
     });

     publicacoes.username = publicacoes.User.username;

    res.render('index', {publicacoes});
});

roteador.get('/novo', (req, res)=>{
    res.render('novo');
});

roteador.get('/:id', async(req, res)=>{
    const {id} = req.params;
    let publicacao = await Poster.findByPk(id,{
        include: [{model:User}]
    });

    res.render('apresenta', {publicacao});
});

roteador.get('/:id/edit', async(req, res)=>{
    const {id} = req.params;
    let publicacao = await Poster.findByPk(id);
    res.render('edit', {publicacao});
});

roteador.post('/', async (req, res)=>{
    const {username, poster} = req.body;
    
    const {id} = await User.findOne({
        where: {username: username}
     });

     if(!id){
         res.send('<h1>Usuário não encontrado</h1>');
     }else{
        const userId = id;
        await Poster.create({username, poster, userId});
        res.redirect('/publicacoes');
     }

});


roteador.patch('/:id', async(req, res)=>{

    const poster = req.body.poster;

    await Poster.update(
        {poster},
        {
            where: {id: req.params.id}
        }
    );

    res.redirect('/publicacoes');
});

roteador.delete('/:id', async(req, res)=>{

    await Poster.destroy(
        {
            where: {id: req.params.id}
        }
    );

    res.redirect('/publicacoes');
});

module.exports = roteador;