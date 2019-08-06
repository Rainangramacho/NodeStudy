'use strict'

const express = require('express');
//criando constantes que recebem a porta e o express
const router = express.Router() // criando variavel qu recebe rotas


//configurando rotas
router.get ('/', (req, res, next)=>{
    res.status(200).send({
        title: "Bem vindo à minha API RESTful em Node.js !! ",
        
    });
});


module.exports = router; // esse module.exports recebe a variavel que recebe o express.Router()