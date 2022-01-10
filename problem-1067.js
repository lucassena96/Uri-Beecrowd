var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines.shift());
if(x>=1 && x<=1000){
    for(let i = 1; i<=x; i++){
        if(i%2==!0){
            console.log(i);
        }
    }
};

