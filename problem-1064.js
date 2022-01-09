var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines[0]);
let b = Number(lines[1]);
let c = Number(lines[2]);
let d = Number(lines[3]);
let e = Number(lines[4]);
let f = Number(lines[5]);
let linhas = [a, b, c, d, e, f];
let positivos = [];
for(let i = 0; i<=linhas.length; i++){
    if(linhas[i]>=0){
        positivos.push(linhas[i]);
    }
}
console.log(`${positivos.length} valores positivos`);
let soma = 0
for(let x = 0; x<positivos.length; x++){
    soma += parseFloat(positivos[x])
}
let average = soma/positivos.length
console.log(average.toFixed(1));
