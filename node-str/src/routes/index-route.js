'use strict'

const express = require('express');
//criando constantes que recebem a porta e o express
const router = express.Router() // criando variavel qu recebe rotas

//configurando rotas
const route = router.get ('/', (req, res, next)=>{
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

module.exports = router; // esse module.exports recebe a variavel que recebe o express.Router()