'use strict'

const express = require('express');
const bodyParser = require('body-parser');

//criando constantes que recebem a porta e o express
const app = express();
const indexRoute = require('./routes/index-route');
const surfistas = require('./routes/surfistas');
const bateria = require('./routes/bateria');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false})); // codificar url


//as rotas de cima são que a propria requisição coloca sozinha
// aqui é as rotas que devemos colocar nas requisições nas urls
app.use('/', indexRoute);
app.use('/surfistas', surfistas);
app.use('/bateria', bateria);


module.exports = app; // esse module.exports recebe a variavel que recebe o express.Router()
                     //exportando esse arquivo quando ela for importanda por outro arquivo


//body parser converte o corpo da requisição em JSON
//status 200 significa "OK" na lingua de servidor;
//res é response
//req é requisição
//req.body é pra pegar o corpo da requisição
//201 significa created
// essa '/' é uma rota
//get pega informaçãos, post envia informações
//put é pra atualizar, e o delete pra apagar
//o nodemon reseta o servidor sempre que o arquivo é alterado

