'use strict'
const conexao = require ('../../bin/conexao_bd');

exports.cadastrar_onda = (req, res, next) => {
    var helpVar = 0;
    const onda = { 
        id: req.body.id,
        surfista_numero: req.body.surfista_numero, 
        bateria_id: req.body.bateria_id
      }

       conexao.query('SELECT * FROM bateria WHERE bateria.id = " '+ onda.bateria_id +' " AND (Surfista_numero1 =" ' + onda.surfista_numero +' " OR Surfista_numero2 = " ' + onda.surfista_numero + ' ")  ;', (err, res) => {
        console.log(err, res, res.length); // deve dar null, [], 0
        if (res.length == 0){
            console.log('');
            helpVar =1;

        }
    });  

    if(helpVar == 0){
        var sql = 'INSERT INTO onda (id, Surfista_numero, Bateria_id)' +
        'VALUES (" '+onda.id+' ", " '+ onda.surfista_numero+' ", " ' + onda.bateria_id+' ");';

        conexao.query(sql, function(err, rows, fields){
            if (err){
                res.status(500).send({error: ' Algo falhou '})
            }
            res.json(rows);
        }) 
    }
};  

exports.visualizar_ondas = (req, res, next) => {
    
   var sql = 'SELECT * FROM onda ;';

   conexao.query(sql, function(err, rows, fields){
    if (err){
        res.status(500).send({error: ' Algo falhou '})
    }
    res.json(rows);
}) 
};