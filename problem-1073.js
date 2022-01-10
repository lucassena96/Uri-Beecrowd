var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines[0]);

if(x>5 && x<2000){
	for(let i=1;i<=x;i++){
  	if(i%2==0){
    	console.log(i+'^2 = '+Math.pow(i,2));
    }
  }
}
