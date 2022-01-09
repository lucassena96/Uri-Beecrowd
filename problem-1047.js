var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linhas = lines.shift().split(" ");
let start = parseInt(linhas[0]);
let finish = parseInt(linhas[1]);
if(start>finish){
    let result = Math.abs(start-24)+finish
    console.log(`O JOGO DUROU ${result} HORA(S)`)
}
if(start<finish){
    let result = Math.abs(start-finish)
    console.log(`O JOGO DUROU ${result} HORA(S)`)
}
if(start===finish){
    console.log("O JOGO DUROU 24 HORA(S)")
};

