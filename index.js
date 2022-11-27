const express = require('express');
const {users} = require('./controllers');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const session = require('express-session');
const oneDay = 1000 * 60 * 60 * 24;
const sessionOptions = {secret: 'frasealeatoria', cookie: { maxAge: oneDay }, resave: false, saveUninitialized: false};

app.use(session(sessionOptions));

function secure_pass(req, res, next) {
    if (req.session.login || req.path==='/HomeLog') {
        next();
    } else {
       res.redirect("/Login");
    }
}


//Configura as variáveis do Node para a View Engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views/paginas'));

//Permite obter informações do corpo das requisições
app.use(express.urlencoded({extended:true}));

//Define diretório para arquivos estáticos
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')));

//Define _method como parâmetro para transformar
// de POST para PATCH ou DELETE
app.use(methodOverride('_method'));

app.use('/', users);
app.use(secure_pass);

app.listen(80, ()=>{
    console.log('Execução na porta 80!')
});
