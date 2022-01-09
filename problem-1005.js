var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);

if (a >= 0 && a <= 10 && b >= 0 && b <= 10){
    var res = ((a*3.5)+(b*7.5))/11
    console.log(`MEDIA = ${res.toFixed(5)}`);
};
