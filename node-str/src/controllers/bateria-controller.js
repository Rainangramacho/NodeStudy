'use strict'
const conexao = require ('../../bin/conexao_bd');


exports.obter_bateria = (req, res, next) =>{
        var sql = "SELECT * FROM bateria";
        conexao.query(sql, function(err, rows, fields){
            if (err){
                res.status(500).send({error: ' Algo falhou '})
            }
            res.json(rows);
        }) 
};

exports.criar_bateria = (req, res, next) =>{
    const bateria = { 
        surfista_numero: req.body.surfista_numero
      }
    var sql = 'INSERT INTO bateria (Surfista_numero) VALUES (" ' + bateria.surfista_numero +' ");';
    conexao.query(sql, function(err, rows, fields){
        if (err){
            res.status(500).send({error: ' Algo falhou '})
        }
        res.json(rows);
    }) 
};

exports.editar_bateria = (req, res, next) =>{
    const bateria = { 
        surfista_numero_params: req.params.Surfista_numero,
        surfista_numero_body: req.body.Surfista_numero
      }
    var sql = 'UPDATE bateria SET Surfista_numero = " ' + bateria.surfista_numero_body +' " WHERE Surfista_numero = " ' + bateria.surfista_numero_params + ' ";';
    conexao.query(sql, function(err, rows, fields){
        if (err){
            res.status(500).send({error: ' Algo falhou '})
        }
        res.json(rows);
    }) 
};

exports.obter_surfistas_na_bateria = (req, res, next) =>{
    var sql = "SELECT surfista.nome FROM bateria INNER JOIN surfista ON (bateria.Surfista_numero = surfista.numero)";
    conexao.query(sql, function(err, rows, fields){
        if (err){
            res.status(500).send({error: ' Algo falhou '})
        }
        res.json(rows);
    }) 
};

exports.deletar_bateria = (req, res, next)=>{
    const bateria = { 
        id : req.params.id,
      }

   var sql6 = 'DELETE FROM bateria WHERE id = " ' + bateria.id + ' "; ';
   conexao.query(sql6, function(err, rows, fields){
    if (err){
        res.status(500).send({error: ' Algo falhou '})
    }
    res.json(rows);
}) 
};