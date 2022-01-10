var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);
let d = parseFloat(lines[3]);
let e = parseFloat(lines[4]);
let linhas = [a, b, c, d, e];
let pares = 0
let impares = 0
for(let i = 0; i<=linhas.length; i++){
    if(Math.abs(linhas[i]%2)===0){
        pares++;
    }
    if(Math.abs(linhas[i]%2)==!0){
        impares++;
    }
}
console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);

let positivos = [];
let negativos = [];
for(let i = 0; i<=linhas.length; i++){
    if(linhas[i]>0){
        positivos.push(linhas[i]);
    }
    if(linhas[i]<0){
        negativos.push(linhas[i]);
    }
}
console.log(`${positivos.length} valor(es) positivo(s)`);
console.log(`${negativos.length} valor(es) negativo(s)`);
