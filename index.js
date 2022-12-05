const express = require('express');
const {users, home, posters} = require('./controllers');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const session = require('express-session');
const oneDay = 1000 * 60 * 60 * 24;
const sessionOptions = {secret: 'frasealeatoria', cookie: { maxAge: oneDay }, resave: false, saveUninitialized: false};

app.use(session(sessionOptions));

function secure_pass(req, res, next) {
    if (req.session.login || req.path==='/login') {
        next();
    } else {
       res.redirect("/usuarios/login");
    }
}

//Configura as variáveis do Node para a View Engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
//Permite obter informações do corpo das requisições
app.use(express.urlencoded({extended:true}));

//Define diretório para arquivos estáticos
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')));

//Define _method como parâmetro para transformar
// de POST para PATCH ou DELETE
app.use(methodOverride('_method'));


/*Criar um midleware com a rota da página inicial 
app.use('/home', home);
*/
app.use('/home', home);
app.use('/usuarios', users);
app.use(secure_pass);
app.use('/publicacoes', posters)

app.listen(80, ()=>{
    console.log('Execução na porta 80!')
});
