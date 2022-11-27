const {Router} = require('express');

const roteador = Router()

roteador.get('/',(req, res)=>{

    res.status(200).render('../paginas/homeSemLog');
});

roteador.get('/Login',(req, res)=>{

    res.status(200).render('../paginas/login');
});

roteador.get('/CadastroUsuario',(req, res)=>{

    res.status(200).render('../paginas/formularioCadastroUsuario');
});

module.exports = roteador;