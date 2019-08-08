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

var connection = mysql.createConnection({multipleStatements: true,
    host: 'z12itfj4c1vgopf8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'bahbj3algje18sdv',
    password: 'uwzqr4km5z3yr7n8',
    database: 'f6cwob7pa1y4lorv'
});

connection.connect(function(err){
    if (err) throw err;
    console.log('connected!');
});


module.exports = connection;



//solução caso o client mysql dê problema ---> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'