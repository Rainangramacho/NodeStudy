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
        id: req.body.id
      }
    var sql = 'INSERT INTO bateria (id) VALUES (" ' + bateria.id +' ");';
    conexao.query(sql, function(err, rows, fields){
        if (err){
            res.status(500).send({error: ' Algo falhou '})
        }
        res.json(rows);
    }) 
};

