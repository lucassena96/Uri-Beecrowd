var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines[0]);
var getcar = a*2;

console.log(`${getcar} minutos`);
