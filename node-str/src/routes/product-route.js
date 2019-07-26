'use strict'

const express = require('express');
//criando constantes que recebem a porta e o express
const router = express.Router() // criando variavel qu recebe rotas

//configurando rotas
router.post ('/', (req, res, next)=>{
    res.status(201).send(req.body);

});

router.put ('/:id', (req, res, next)=>{//vai dar update por um id
    const id = req.params.id; // dizendo o que eu quero fazer request, nesse caso é o valor do id
    res.status(200).send({
         id: id,
         item: req.body
        });

});

router.delete ('/', (req, res, next)=>{ // essa / é o valor colocado na url
    res.status(200).send(req.body);
         
});

module.exports = router;// esse module.exports recebe a variavel que recebe o express.Router()