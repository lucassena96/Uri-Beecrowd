var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linhas = lines[0].split(" ");
let x = parseInt(linhas[0]);
let y = parseInt(linhas[1]);

var foods = new Map();
foods.set(1, "4.00");
foods.set(2, "4.50");
foods.set(3, "5.00");
foods.set(4, "2.00");
foods.set(5, "1.50");
var total = foods.get(x)*y;
console.log(`Total: R$ ${total.toFixed(2)}`);
