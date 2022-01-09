var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var lines1 = lines[0].split(" ");
var x1 = lines1[0];
var y1 = lines1[1];
var lines2 = lines[1].split(" ");
var x2 = lines2[0];
var y2 = lines2[1];

var distance = Math.sqrt(((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1)));

console.log(distance.toFixed(4));
