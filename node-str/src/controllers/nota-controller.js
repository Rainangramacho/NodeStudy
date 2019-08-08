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

exports.surfista_vencedor_bateria = (req, res, next) => {
    const nota = { 
        bateria_id: req.body.bateria_id
    }
    var surfista2_bateria;
    var surfista1_bateria;
    var nota_final1;
    var nota_final2;


    var select_sql2 = `SELECT Surfista_numero1, Surfista_numero2 FROM bateria WHERE id = ${nota.bateria_id}`;
    conexao.query(select_sql2, function(err, rows, fields){
        if (err){
            res.status(500).send({error: ' Algo falhou '})
        }

        rows.forEach((element,i) => {
            surfista1_bateria = element.Surfista_numero1;
            surfista2_bateria = element.Surfista_numero2;
        });

        calcular_nota(surfista1_bateria,surfista2_bateria);
    });


    function calcular_nota(surfista1_bateria,surfista2_bateria){

        var sql = 'CALL maiores_notas_surfista1("'+nota.bateria_id+'","'+surfista1_bateria+'");CALL maiores_notas_surfista2("'+nota.bateria_id+'","'+surfista2_bateria+'");';

        conexao.beginTransaction(sql, function(err, rows, fields){
            if (err){

                res.status(500).send({error: ' Algo falhou '})
            }

            rows[0].forEach((element,i) => {
                    nota_final1 = element.media_surfista_1;

            });
            rows[2].forEach((element,i) => {
                
                nota_final2 = element.media_surfista_2;
            });

            if(nota_final1 > nota_final2){
                res.json("O surfista vencedor dessa bateria foi o de número : "+ surfista1_bateria);
            }else if(nota_final2 > nota_final1){
                res.json("O surfista vencedor dessa bateria foi o de número : "+ surfista2_bateria);
            }
            console.log(nota_final1);
            console.log(nota_final2);
            //res.json(rows);
            
        });
    }

};
