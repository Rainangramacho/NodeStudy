/* const Sequelize = require('sequelize');
const sequelize = new Sequelize ('node_bd','root','', {
    host: "localhost",
    dialect: 'mysql'
});

  /* const testando = sequelize.define('testando',{
    nome: {
        type :Sequelize.STRING
    },
    numero: {
        type: Sequelize.INTEGER
    }
})
testando.create({
    nome: "Rainan",
    numero:"14"
}) 

//testando.sync({force:true})

const usuarios = sequelize.define('usuarios',{
    nome: {
        type :Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }
    
})
usuarios.create({
    nome: "Rainan",
    sobrenome:"Gramacho",
    idade:"21"
})
usuarios.sync({force:true}) 
 

sequelize.authenticate().then(function(){
    console.log("Sucesso");
}).catch(function(erro){
    console.log("Falha "+erro);
})  */

var mysql = require ('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_bd'
});

connection.connect(function(err){
    if (err) throw err;
    console.log('connected!');
});

module.exports = connection;