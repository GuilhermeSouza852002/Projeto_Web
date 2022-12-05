const {User} = require('../models');
const {Router} = require('express');


const roteador = Router();
//CRUD - Create, Read, Update, Destroy
//em REST

roteador.post('/novo', async (req, res)=>{
    const {username, useremail, password} = req.body;
    await User.create({username, useremail, password});
    res.redirect('/usuarios/login');

    //res.status(201).send('criando com sucesso');
       
});

roteador.get('/login', async(req, res)=>{
    res.status(200).render('usuario/login');
});

roteador.get('/logoff', async(req, res)=>{
    req.session.destroy();
    res.redirect('/home');
});

roteador.get('/cadastrousuario', (req, res)=>{
    res.status(200).render('usuario/formularioCadastroUsuario');    
});

roteador.get('/:id', async(req, res)=>{
    //res.status(200).render('apresenta', {usuario});
});

roteador.get('/:id/edit', async(req, res)=>{

});

roteador.post('/login', async (req, res)=>{
    const {useremail, password} = req.body;
    
    const user = await User.findOne({
        where: {
            useremail: useremail,
            password: password
        }   
    });

    req.session.login = false;
    if(user){
        req.session.login = true;
        res.redirect('/publicacoes');
    }else{
        res.redirect('/usuarios/login');
    }   
       
});


roteador.delete('/:id', async(req, res)=>{

});

module.exports = roteador;