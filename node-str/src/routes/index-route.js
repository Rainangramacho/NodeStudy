'use strict'

const express = require('express');
const router = express.Router() // criando variavel que recebe rotas
//configurando rotas
router.get ('/', (req, res, next)=>{
    res.status(200).send({
        title: "Bem vindo à minha API RESTful em Node.js !! ",
        
    });
});


module.exports = router; 