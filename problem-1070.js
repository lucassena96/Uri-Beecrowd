var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines.shift());
var count = 0
for(let i = x; count<6; i++){
    if(i%2==!0){
        console.log(i);
        count ++
    }
};
