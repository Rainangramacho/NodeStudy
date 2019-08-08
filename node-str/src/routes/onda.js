'use strict'

const express = require('express');
const router = express.Router() 
const controller = require('../controllers/onda-controller');


//configurando rotas
router.get ('/visualizar_ondas', controller.visualizar_ondas);
router.post ('/cadastrar_onda', controller.cadastrar_onda);

module.exports = router;

