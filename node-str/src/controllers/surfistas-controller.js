'use strict'
const conexao = require ('../../bin/conexao_bd');


exports.obter_surfista = (req, res, next) =>{
        var sql = "SELECT * FROM surfista";
        conexao.query(sql, function(err, rows, fields){
            if (err){
                res.status(500).send({error: ' Algo falhou '})
            }
            res.json(rows);
        }) 
};

exports.obter_surfista_pais = (req, res, next) =>{
    const surfista = { 
        pais: req.body.pais
      }
      var sql2 = 'SELECT numero, nome, pais FROM surfista WHERE pais = " ' + surfista.pais + ' "; ';
        conexao.query(sql2, function(err, rows, fields){
            if (err){
                res.status(500).send({error: ' Algo falhou '})
            }
            res.json(rows);
        }) 

};

exports.cadastrar_surfista = (req, res, next) => {
    const surfista = { 
        numero: req.body.numero,
        nome: req.body.nome, 
        pais: req.body.pais
      }

   var sql3 = 'INSERT INTO surfista (numero, nome, pais)' +
   'VALUES (" '+surfista.numero+' ", " '+ surfista.nome+' ", " ' + surfista.pais+' ");';

   conexao.query(sql3, function(err, rows, fields){
    if (err){
        res.status(500).send({error: ' Algo falhou '})
    }
    res.json(rows);
}) 
};

exports.editar_surfista = (req, res, next) =>{
    const surfista = { 
        numero : req.params.numero,
        nome: req.body.nome, 
        pais: req.body.pais
      }

   var sql4 = 'UPDATE surfista SET nome = " ' 
   + surfista.nome + ' ", pais = " ' + surfista.pais + ' " WHERE numero = " ' + surfista.numero + ' "; ';

   conexao.query(sql4, function(err, rows, fields){
    if (err){
        res.status(500).send({error: ' Algo falhou '})
    }
    res.json(rows);
}) 
};


exports.editar_surfista_pais = (req, res, next) =>{
    const surfista = { 
        numero : req.params.numero, 
        pais: req.body.pais
      }

   var sql5 = 'UPDATE surfista SET pais = " ' + surfista.pais + ' " WHERE numero = " ' + surfista.numero + ' "; ';

   conexao.query(sql5, function(err, rows, fields){
    if (err){
        res.status(500).send({error: ' Algo falhou '})
    }
    res.json(rows);
}) 
};

exports.deletar_surfista = (req, res, next)=>{
    const surfista = { 
        numero : req.params.numero,
      }

   var sql6 = 'DELETE FROM surfista WHERE numero = " ' + surfista.numero + ' "; ';
   conexao.query(sql6, function(err, rows, fields){
    if (err){
        res.status(500).send({error: ' Algo falhou '})
    }
    res.json(rows);
}) 
};