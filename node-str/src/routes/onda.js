'use strict'

const express = require('express');
const router = express.Router() 
const controller = require('../controllers/onda-controller');


//configurando rotas
//router.get ('/obter_bateria', controller.obter_bateria);
router.post ('/cadastrar_onda', controller.cadastrar_onda);
//router.put ('/editar_bateria/:Surfista_numero', controller.editar_bateria);
//router.delete ('/deletar_bateria/:id', controller.deletar_bateria); 

module.exports = router;

