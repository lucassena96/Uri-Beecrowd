var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linhas = lines.shift().split(" ");
let a = parseFloat(linhas[0]);
let b = parseFloat(linhas[1]);
let c = parseFloat(linhas[2]);

if(a<b+c && b<a+c && c<a+b && Math.abs(b-c)<a && Math.abs(a-c)<b && Math.abs(a-b)<c){
	let perimetro = a+b+c;
	console.log(`Perimetro = ${perimetro.toFixed(1)}`);
}else{
	let area = (a+b)*c/2;
	console.log(`Area = ${area.toFixed(1)}`);
};
