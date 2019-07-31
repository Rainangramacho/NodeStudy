'use strict'

const express = require('express');
const router = express.Router() 
const controller = require('../controllers/bateria-controller');


//configurando rotas
router.get ('/obter_bateria', controller.obter_bateria);
router.get ('/obter_surfistas_na_bateria', controller.obter_surfistas_na_bateria);
router.post ('/criar_bateria', controller.criar_bateria);
//router.put ('/editar_bateria/:Surfista_numero', controller.editar_bateria);
router.delete ('/deletar_bateria/:id', controller.deletar_bateria); 

module.exports = router;

