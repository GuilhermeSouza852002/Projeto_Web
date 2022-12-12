const { User } = require('../models');
const { Router } = require('express');


const roteador = Router();
//CRUD - Create, Read, Update, Destroy
//em REST


//configurações do usuario
roteador.get('/settings', async (req, res) => {
    const usuarios = await User.findAll({

    });

    usuarios.username = usuarios.User?.username;
    usuarios.useremail = usuarios.User?.useremail;
    usuarios.password = usuarios.User?.password;

    res.status(200).render('usuario/settings', { usuarios });



});
/*const {username, useremail, password} = req.session;
let usuario = await User.findAll(username, useremail, password, {
    where: {
        username: req.session.username,
        useremail: req.session.useremail,
        password: req.session.password
    }   
});
 
res.status(200).render('usuario/settings', {usuario});
});*/



//Criação de usuario
roteador.post('/novo', async (req, res) => {
    const { username, useremail, password } = req.body;
    await User.create({ username, useremail, password });
    res.redirect('/usuarios/login');

    //res.status(201).send('criando com sucesso');

});

//get tela de login
roteador.get('/login', async (req, res) => {
    res.status(200).render('usuario/login');
});

//get tela de logoff
roteador.get('/logoff', async (req, res) => {
    req.session.destroy();
    res.redirect('/home');
});

//get tela do formulario
roteador.get('/cadastrousuario', (req, res) => {
    res.status(200).render('usuario/formularioCadastroUsuario');
});

//lista usuario
roteador.get('/:id', async (req, res) => {

    const { id } = req.params;
    let usuario = await User.findByPk(id, {

    });

    res.status(200).render('usuario/infoUsuario', { usuario });
    //res.redirect('/usuarios/settings', {usuario});
    //res.send({usuario});
});

//renderiza usuario
roteador.get('/:id/edit', async (req, res) => {
    const { id } = req.params;
    let usuario = await User.findByPk(id);
    res.status(200).render('usuario/editUsuario', { usuario });
    //res.send({usuario});

});

//atualizar
roteador.patch('/:id', async (req, res) => {
    const { username, useremail, password } = req.body;
    await User.update(
        { username, useremail, password },
        {
            where: { id: req.params.id }
        }
    );

    res.redirect('/usuarios/settings');
});

//fazer login com email e senha
roteador.post('/login', async (req, res) => {
    const { useremail, password } = req.body;

    const user = await User.findOne({
        where: {
            useremail: useremail,
            password: password
        }
    });
    //criando sessão ao validar login
    req.session.login = false;
    if (user) {
        req.session.login = true;
        res.redirect('/home');
    } else {
        res.redirect('/usuarios/login');
    }

});

//apaga usuario
roteador.delete('/:id', async (req, res) => {

    await User.destroy(
        {
            where: { id: req.params.id }
        }
    );
    //res.status(201).send('usuario deletado');
    res.redirect('/usuarios/settings');
});


module.exports = roteador;