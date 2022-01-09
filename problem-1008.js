var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n_func = parseInt(lines[0]);
var horas_trab = parseInt(lines[1]);
var v_hora = parseFloat(lines[2]);
var salario = horas_trab*v_hora
console.log(`NUMBER = ${n_func}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);
