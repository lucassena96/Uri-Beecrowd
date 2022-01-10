var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numerosDentro = [];
var numerosFora = [];

for (let i=1; i<=lines[0]; i++){
	if(lines[i]>=10 && lines[i]<=20){
  	numerosDentro.push(lines[i]);
  }else{
  	numerosFora.push(lines[i]);
  }
}

console.log(numerosDentro.length+' in');
console.log(numerosFora.length+' out');
