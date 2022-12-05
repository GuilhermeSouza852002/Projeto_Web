const {User} = require('../models');
const {Router} = require('express');


const roteador = Router();
//CRUD - Create, Read, Update, Destroy
//em REST


//configurações do usuario
roteador.get('/settings', async(req, res)=>{
    const usuarios = await User.findAll({

     });
    usuarios.username = usuarios.User?.username;
    res.status(200).render('usuario/settings', {usuarios});
});

//Criação de usuario
roteador.post('/novo', async (req, res)=>{
    const {username, useremail, password} = req.body;
    await User.create({username, useremail, password});
    res.redirect('/usuarios/login');

    //res.status(201).send('criando com sucesso');
       
});

//get tela de login
roteador.get('/login', async(req, res)=>{
    res.status(200).render('usuario/login');
});

//get tela de logoff
roteador.get('/logoff', async(req, res)=>{
    req.session.destroy();
    res.redirect('/home');
});

//get tela do formulario
roteador.get('/cadastrousuario', (req, res)=>{
    res.status(200).render('usuario/formularioCadastroUsuario');    
});

//lista usuario
roteador.get('/:id', async(req, res)=>{
});

//edita usuario
roteador.get('/:id/edit', async(req, res)=>{

});

//fazer login com email e senha
roteador.post('/login', async (req, res)=>{
    const {useremail, password} = req.body;
    
    const user = await User.findOne({
        where: {
            useremail: useremail,
            password: password
        }   
    });

//criando sessão ao validar login
    req.session.login = false;
    if(user){
        req.session.login = true;
        res.redirect('/home');
    }else{
        res.redirect('/usuarios/login');
    }   
       
});

//apaga usuario
roteador.delete('/:id', async(req, res)=>{

});

module.exports = roteador;