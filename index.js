'use strict'


//importando os protocolos abaixo e guardando nas contantes que estão antes da igualdade

const http = require('http');
const app = require ('./node-str/src/app'); // importando arquivo app


//se não vier porta setada ele seta a 3000
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app); // criando server

server.listen(port); // colocar pra ficar escutando a porta
server.on('listening', onListening);
console.log('API rodando na porta ' + port);


//função de normalizar a porta da aplicação
function normalizePort(val){ //a função recebe um valor 
    const port = parseInt(val,10);  // tenta converter para um inteiro

    if(isNaN(port)){// se esse valor não for um numero retorna o valorde val ( que é 10) 
        return val;
    }

    if(port >= 0){ // se a porta for maior ou igual a 0, então retorna a porta
                    // se não retorna false 
        return port;
    }
    return false;
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
    ? 'pipe' + addr
    : 'port' + addr.port;
   
}





