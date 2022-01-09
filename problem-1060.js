var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);
let d = parseFloat(lines[3]);
let e = parseFloat(lines[4]);
let f = parseFloat(lines[5]);
let linhas = [a, b, c, d, e, f];
let positivos = [];
for(let i = 0; i<=linhas.length; i++){
    if(linhas[i]>=0){
        positivos.push(linhas[i]);
    }
}
console.log(`${positivos.length} valores positivos`);
