var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);
let triangulo = (A*C)/2.0; 
let circulo = 3.14159*(C*C); 
let trapezio = ((A+B)*C)/2.0; 
let quadrado = B*B; 
let retangulo = A*B;  
console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);
