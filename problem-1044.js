var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linhas = lines.shift().split(" ");
let a = parseInt(linhas[0]);
let b = parseInt(linhas[1]);

if(b%a===0 || a%b===0){
	console.log("Sao Multiplos");
}else{
	console.log("Nao sao Multiplos");
};

