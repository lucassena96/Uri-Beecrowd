var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linhas = lines[0].split(" ")
let x = parseFloat(linhas[0]);
let y = parseFloat(linhas[1]);
if(x===0 && y===0){
    console.log("Origem");
    return;
}if(x===0){
    console.log("Eixo Y");
    return;
}
if(y===0){
    console.log("Eixo X");
    return;
}
if(x>0 && y>0){
    console.log("Q1");
    return;
}
if(x<0 && y>0){
    console.log("Q2");
    return;
}
if(x<0 && y<0){
    console.log("Q3");
    return;
}
if(x>0 && y<0){
    console.log("Q4");
    return;
};

