var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linhas = lines[0].split(" ");
let A = linhas[0];
let B = linhas[1];
let C = linhas[2];
let D = linhas[3];

if(B>C && D>A && (C+D)>(A+B) && C>=0 && D>=0 && (A%2===0)){
    console.log("Valores aceitos");
}else{
    console.log("Valores nao aceitos");
};

