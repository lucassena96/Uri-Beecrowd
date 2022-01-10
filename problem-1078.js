var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i=1; i<=10;i++){
	let tabuada = i*lines[0];
	console.log(`${i} x ${lines[0]} = ${tabuada}`);
}

