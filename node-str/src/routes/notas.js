'use strict'

const express = require('express');
const router = express.Router() 
const controller = require('../controllers/nota-controller');


//configurando rotas
router.get ('/visualizar_notas_parciais', controller.visualizar_notas_parciais);
router.get ('/surfista_vencedor_bateria', controller.surfista_vencedor_bateria);
router.post ('/cadastrar_nota', controller.cadastrar_nota);

module.exports = router;

