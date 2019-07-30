'use strict'
const conexao = require ('../../bin/conexao_bd');

exports.cadastrar_onda = (req, res, next) => {
    const onda = { 
        id: req.body.id,
        surfista_numero: req.body.surfista_numero, 
        bateria_id: req.body.bateria_id
      }

   var sql = 'INSERT INTO onda (id, Surfista_numero, Bateria_id)' +
   'VALUES (" '+onda.id+' ", " '+ onda.surfista_numero+' ", " ' + onda.bateria_id+' ");';

   conexao.query(sql, function(err, rows, fields){
    if (err){
        res.status(500).send({error: ' Algo falhou '})
    }
    res.json(rows);
}) 
};