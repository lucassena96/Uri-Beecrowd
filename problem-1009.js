var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines[0];
var salario = parseFloat(lines[1]);
var vendas = parseFloat(lines[2]);
var comissao = vendas*0.15;
var total = (comissao+salario).toFixed(2);
console.log(`TOTAL = R$ ${total}`);
