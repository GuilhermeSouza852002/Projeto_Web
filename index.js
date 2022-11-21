const express = require('express');
const methodOverride = require('method-override');

const {dados, usuarios} = require('./controllers');

const app = express();
const path = require('path');

//Configura as variáveis do Node para a View Engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//Permite obter informações do corpo das requisições
app.use(express.urlencoded({extended:true}));

//Define diretório para arquivos estáticos
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')));

//Define _method como parâmetro para transformar
// de POST para PATCH ou DELETE
app.use(methodOverride('_method'));

app.use('/', dados);

app.listen(80, ()=>{
    console.log('Execução na porta 80!')
});
