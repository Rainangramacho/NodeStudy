'use strict'

const express = require('express');
const bodyParser = require('body-parser');

//criando constantes que recebem a porta e o express
const app = express();
const indexRoute = require('./routes/index-route');
const surfistas = require('./routes/surfistas');
const bateria = require('./routes/bateria');
const onda = require('./routes/onda');
const notas = require('./routes/notas');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false})); // codificar url

app.use('/', indexRoute);
app.use('/surfistas', surfistas);
app.use('/bateria', bateria);
app.use('/onda', onda);
app.use('/notas', notas);


module.exports = app; 


//body parser converte o corpo da requisição em JSON
//201 significa created
//o nodemon reseta o servidor sempre que o arquivo é alterado

