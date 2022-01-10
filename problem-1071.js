var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines[0]);
let y = parseInt(lines[1]);
let a = [x, y].sort();
let sum = 0;

for (let i=a[0]+1; i<a[1]; i++){
	if(i%2!=0){
  	sum += i;
  }
}
console.log(sum);
