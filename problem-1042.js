var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linhas = lines[0].split(" ");
linhas.sort(function(a, b){
  return a-b;
});
console.log(linhas[0]);
console.log(linhas[1]);
console.log(linhas[2]);
console.log("");
var normal = lines[0].split(" ");
console.log(normal[0]);
console.log(normal[1]);
console.log(normal[2]);
