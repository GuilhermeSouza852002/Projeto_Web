const {User} = require('../models');
const {Router} = require('express');


const roteador = Router();
//CRUD - Create, Read, Update, Destroy
//em REST
roteador.get('/', async(req, res)=>{

    res.status(200).render('../paginas/homeSemLog');
});

roteador.get('/Login', async(req, res)=>{
    res.render('../paginas/login');
});

roteador.get('/Logoff', async(req, res)=>{
    req.session.destroy();
    res.redirect('../paginas/homeSemLog');
});


roteador.get('/CadastroUsuario', (req, res)=>{
    res.render('../paginas/formularioCadastroUsuario');    
});

roteador.get('/:id', async(req, res)=>{

});

roteador.get('/:id/edit', async(req, res)=>{

});

roteador.post('/Login', async (req, res)=>{
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
        res.redirect('/HomeLog');
    }else{
        res.redirect('/Login');
    }   
       
});

roteador.post('/CadastroUsuario', async (req, res)=>{
    const {username, useremail, password} = req.body;
    await User.create({username, useremail, password});
    res.redirect('/Login');
       
});

module.exports = roteador;