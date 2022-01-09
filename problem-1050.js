var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let ddd = parseInt(lines.shift());
let lista = new Map();
lista.set(61, "Brasilia");
lista.set(71, "Salvador");
lista.set(11, "Sao Paulo");
lista.set(21, "Rio de Janeiro");
lista.set(32, "Juiz de Fora");
lista.set(19, "Campinas");
lista.set(27, "Vitoria");
lista.set(31, "Belo Horizonte");
if(lista.get(ddd)===undefined){
    console.log("DDD nao cadastrado");
}else{
    console.log(lista.get(ddd));
};
