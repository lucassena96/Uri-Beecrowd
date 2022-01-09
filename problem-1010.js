var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line1 = lines[0].split(' ');
var line2 = lines[1].split(' ');

var produto1 = parseInt(line1[0]);
var quantidade1 = parseInt(line1[1]);
var preco1 = parseFloat(line1[2]).toFixed(2);
var produto2 = parseInt(line2[0]);
var quantidade2 = parseInt(line2[1]);
var preco2 = parseFloat(line2[2]).toFixed(2);
var total = ((quantidade1*preco1)+(quantidade2*preco2)).toFixed(2);
console.log(`VALOR A PAGAR: R$ ${total}`);
