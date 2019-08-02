'use strict'

const express = require('express');
const router = express.Router() 
const controller = require('../controllers/nota-controller');


//configurando rotas
router.get ('/visualizar_notas_parciais', controller.visualizar_notas_parciais);
router.get ('/visualizar_notas', controller.visualizar_notas);
router.post ('/cadastrar_nota', controller.cadastrar_nota);
router.get ('/surfista_vencedor', controller.surfista_vencedor);
//router.put ('/editar_nota/:Onda_id', controller.editar_nota);
//router.delete ('/deletar_nota/:id', controller.deletar_nota); 

module.exports = router;

