var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines[0]);
var y = parseFloat(lines[1]);

var consumo = x/y;

console.log(`${consumo.toFixed(3)} km/l`);
