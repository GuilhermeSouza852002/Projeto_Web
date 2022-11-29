const {User} = require('../models');
const {Router} = require('express');


const roteador = Router();
//CRUD - Create, Read, Update, Destroy
//em REST
roteador.get('/', async(req, res)=>{

    res.status(200).render('../paginas/homeSemLog');
});

roteador.get('/login', async(req, res)=>{
    res.render('../paginas/login');
});

roteador.get('/cadastrousuario', (req, res)=>{
    res.render('../paginas/formularioCadastroUsuario');    
});

roteador.get('/:id', async(req, res)=>{

});

roteador.get('/:id/edit', async(req, res)=>{

});

roteador.post('/login', async (req, res)=>{
    const {useremail, username, password} = req.body;
    
    const user = await User.findOne({
        where: {
            useremail: useremail,
            username: username,
            password: password
        }   
    });

    req.session.login = false;
    if(user){
        req.session.login = true;
        res.redirect('../paginasComLogin');
    }else{
        res.redirect('../paginas/login');
    }   
       
});

roteador.post('/cadastrousuario', async (req, res)=>{
    const {username, useremail, password} = req.body;
    await User.create({username, useremail, password});
    res.redirect('../paginas/login');
       
});

module.exports = roteador;