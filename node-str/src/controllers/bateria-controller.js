'use strict'
const conexao = require ('../../bin/conexao_bd');
var teste =0;


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
        id: req.body.id,
        surfista_numero1: req.body.surfista_numero1,
        surfista_numero2: req.body.surfista_numero2
      }
      //vendo se na tabela de surfistas existe um surfista com o numero informado
     conexao.query('SELECT surfista.numero FROM surfista WHERE numero = " ' + bateria.surfista_numero1 +' " OR numero = " ' + bateria.surfista_numero2 +' " ;', (err, res) => {
        console.log(err, res, res.length); 
        if (res.length < 2){
            console.log('Um ou os dois surfistas informados não existe');
            teste =1;
            //se não existir surfista, nao cadastra na bateria
        }
    }); 
    
    //verificando se um sufista existe e se ele ta cadastrado na bateria , caso ele exista mas nao esteja cadastrado na bateria, então poderá ser cadastrado
    conexao.query('SELECT * FROM bateria WHERE EXISTS (SELECT numero FROM surfista WHERE surfista.numero = "' + bateria.surfista_numero1 + '" OR surfista.numero = "' + bateria.surfista_numero2 + '")AND bateria.id = " ' + bateria.id +' " ;', (err, res) => {
        console.log(err, res, res.length); 
        if (res.length >= 1){ 
            console.log('Surfista1 já está cadastrado na bateria, cadastre outro surfista.');
            teste =1;
        }
    });
    
        if(teste==0){
            var sql = 'INSERT INTO bateria (id,Surfista_numero1,Surfista_numero2) VALUES (" ' + bateria.id +' "," ' + bateria.surfista_numero1 +' "," ' + bateria.surfista_numero2 +' ");';
            conexao.query(sql, function(err, rows, fields){
                if (err){
                    res.status(500).send({error: ' Algo falhou '})
                }
                res.json(rows);
            }) 
        }    

};

exports.obter_surfistas_na_bateria = (req, res, next) =>{
    var sql = "SELECT bateria.id, surfista.nome, surfista.pais  FROM bateria INNER JOIN surfista ON (bateria.Surfista_numero1 = surfista.numero OR bateria.Surfista_numero2 = surfista.numero)";
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

