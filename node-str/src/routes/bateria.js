'use strict'

const express = require('express');
const router = express.Router() 
const controller = require('../controllers/bateria-controller');


//configurando rotas
router.get ('/obter_bateria', controller.obter_bateria);
router.post ('/criar_bateria', controller.criar_bateria);
/*router.put ('/editar_surfista_pais/:numero', controller.editar_surfista_pais);
router.delete ('/deletar_surfista/:numero', controller.deletar_surfista); */

module.exports = router;

