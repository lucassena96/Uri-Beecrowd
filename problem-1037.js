var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linhas = parseFloat(lines[0]);
if (linhas<0 || linhas>100){
    console.log("Fora de intervalo");
}
if(linhas>=0 && linhas<=25){
    console.log("Intervalo [0,25]");
}
if(linhas>25 && linhas<=50){
    console.log("Intervalo (25,50]");
}
if(linhas>50 && linhas<=75){
    console.log("Intervalo (50,75]");
}
if(linhas>75 && linhas<=100){
    console.log("Intervalo (75,100]");
}

