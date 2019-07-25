'use strict'

const express = require('express');

//criando constantes que recebem a porta e o express
const app = express();
const router = express.Router() // criando variavel qu recebe rotas

//configurando rotas
const route = router.get ('/', (req, res, next)=>{
    res.status(200).send({
        //status 200 significa "OK" na lingua de servidor;
        title: "Node Store API",
        version: "0.0.1"
    });
});

app.use('/',route);
module.exports = app; //exportando esse arquivo quando ela for importanda por outro arquivo

//o nodemon reseta o servidor sempre que o arquivo é alterado
