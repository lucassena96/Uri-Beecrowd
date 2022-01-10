var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i=1; i<=lines[0];i++){
  let a = lines[i].split(' ');
  let x = parseFloat(a[0]);
  let y = parseFloat(a[1]);
  let z = parseFloat(a[2]);
  let result = ((x*2)+(y*3)+(z*5))/10;
  console.log(result.toFixed(1));
}
