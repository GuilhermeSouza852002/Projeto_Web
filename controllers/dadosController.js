const {Router} = require('express');

const roteador = Router()

let dados = [
    {
        id: 1,
        usuario: 'Fulano',
        dado: 'Comentário do Fulano'
    },
    {
        id: 2,
        usuario: 'Ciclano',
        dado: 'Fulano, seu comentário é muito ruim!'
    },
    {
        id: 3,
        usuario: 'Beltrano',
        dado: 'Só li verdades.'
    }
];


let ids = 3;

roteador.get('/',(req, res)=>{

    res.status(200).render('homeSemLog', {dados});
});

module.exports = roteador;