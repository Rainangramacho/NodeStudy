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
        surfista_numero: req.body.surfista_numero
      }
      //vendo se na tabela de surfistas existe um surfista com o numero informado
      conexao.query('SELECT surfista.numero FROM surfista WHERE numero = " ' + bateria.surfista_numero +' ";', (err, res) => {
        console.log(err, res, res.length); // deve dar null, [], 0
        if (res.length == 0){
            console.log('O sufista informado nao esta cadastrado');
            teste =1;
            //se não existir surfista, nao cadastra na bateria
        }
    });

    //verificando se o surfista ja esta na bateria
    conexao.query('SELECT bateria.Surfista_numero FROM bateria WHERE Surfista_numero = " ' + bateria.surfista_numero +' ";', (err, res) => {
        console.log(err, res, res.length); 
        if (res.length >= 1){ // possa ser que tenha mais de um surfista cadastrado com o mesmo numero
            console.log('Surfista já cadastrado');
            teste =1;
        }
    });//se nao tiver cadastrado, ele poderá ser cadastrado


     //contado pra saber quantos surfistas estão cadstrados na bateria
     /* conexao.query('SELECT count(Surfista_numero) FROM bateria;', (err, res,rows) => {
            console.log('Pode cadastrar');
            if (res.query == 2){
                console.log('asdasdads');
                teste =1;
                
            }
        
    });//se tiver mais que dois sufistas na bateria, nao poderá cadastrar o terceiro
  */
    
        
    var sql = 'INSERT INTO bateria (id,Surfista_numero) VALUES (" ' + bateria.id +' "," ' + bateria.surfista_numero +' ");';
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