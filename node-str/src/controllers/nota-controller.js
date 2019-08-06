'use strict'
const conexao = require ('../../bin/conexao_bd');

exports.cadastrar_nota = (req, res, next) => {
    const nota = { 
        onda_id: req.body.onda_id,
        notaparcial1: req.body.notaparcial1,
        notaparcial2: req.body.notaparcial2, 
        notaparcial3: req.body.notaparcial3
      }

   var sql = 'INSERT INTO nota (Onda_id,notaparcial1, notaparcial2, notaparcial3)' +
   'VALUES (" '+nota.onda_id+' "," '+nota.notaparcial1+' ", " '+ nota.notaparcial2+' ", " ' + nota.notaparcial3+' ");';

   conexao.query(sql, function(err, rows, fields){
    if (err){
        res.status(500).send({error: ' Algo falhou '})
    }
    res.json(rows);
}) 
};

exports.visualizar_notas_parciais = (req, res, next) => {

    var sql = 'SELECT * FROM nota ;';

   conexao.query(sql, function(err, rows, fields){
    if (err){
        res.status(500).send({error: ' Algo falhou '})
    }
    res.json(rows);
}) 
};

exports.visualizar_notas = (req, res, next) => {
    const nota = { 
        onda_id: req.body.onda_id
    }

    var sql = 'Select id,((notaparcial1 + notaparcial2 + notaparcial3)/3) as Nota_surfista from nota where Onda_id = " '+ nota.onda_id +'";';// na onda informada a nota do surfista foi tal

   conexao.query(sql, function(err, rows, fields){
    if (err){
        res.status(500).send({error: ' Algo falhou '})
    }
    res.json(rows);
}) 
};


exports.surfista_vencedor = (req, res, next) => {

    var sql = 'SELECT * FROM nota ;';

   conexao.query(sql, function(err, rows, fields){
    if (err){
        res.status(500).send({error: ' Algo falhou '})
    }
    /* const teste = rows;
    console.log(teste); */
    res.json(rows);
}) 
};