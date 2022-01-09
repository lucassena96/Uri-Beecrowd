var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linhas = lines.shift().split(" ");
let decrescente = linhas.sort(function(a, b){
    return b-a;
});
let a = parseFloat(decrescente[0]);
let b = parseFloat(decrescente[1]);
let c = parseFloat(decrescente[2]);

if(a>=(b+c)){
    console.log("NAO FORMA TRIANGULO")
    return
}
if(a*a===(b*b+c*c)){
    console.log("TRIANGULO RETANGULO")
}
if(a*a>b*b+c*c){
    console.log("TRIANGULO OBTUSANGULO")
}
if(a*a<b*b+c*c){
    console.log("TRIANGULO ACUTANGULO")
}
if(a===b && b===c){
    console.log("TRIANGULO EQUILATERO")
}
if((a===b && b!=c) || (a===c && c!=b) || (b===c && c!=a)){
    console.log("TRIANGULO ISOSCELES")
};

