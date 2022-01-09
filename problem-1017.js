var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines[0]);
var b = parseInt(lines[1]);
var distance = a*b;
var consumption = distance/12;

console.log(consumption.toFixed(3));
