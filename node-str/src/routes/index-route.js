'use strict'

const express = require('express');
//criando constantes que recebem a porta e o express
const router = express.Router() // criando variavel qu recebe rotas


//configurando rotas
router.get ('/', (req, res, next)=>{
    res.status(200).send({
        title: "Welcome to my Node.js API RESTful",
        
    });
});


module.exports = router; // esse module.exports recebe a variavel que recebe o express.Router()