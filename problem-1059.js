var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(let x = 1; x<=100; x++){
    if(x%2===0){
        console.log(x);
    }
};

