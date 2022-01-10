var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = lines[0];
for(let i=0; i<10000;i++)
    if(i%n===2){
        console.log(i);
}
