var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = parseFloat(lines[0]);
let notas = [100, 50, 20, 10, 5, 2];
let moedas = [1, 0.5, 0.25, 0.10, 0.05, 0.01];

console.log("NOTAS:");

for(let i=0; i<notas.length; i++) {
   let qt_notas = parseInt(valor / notas[i]);
   console.log(`${qt_notas} nota(s) de R$ ${notas[i].toFixed(2)}`);
   valor = (valor % notas[i]).toFixed(2);
}
console.log("MOEDAS:");

for(let m=0; m<moedas.length; m++){
    let qt_moedas = parseInt(valor/moedas[m]);
    console.log(`${qt_moedas} moeda(s) de R$ ${moedas[m].toFixed(2)}`);
    valor = (valor % moedas[m]).toFixed(2);
};
