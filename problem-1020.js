var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseInt(lines[0]);
var years = parseInt(a/365);
var months = parseInt((a-(years*365))/30);
let days = parseInt(a-((years*365)+(months*30)));

console.log(`${years} ano(s)`);
console.log(`${months} mes(es)`);
console.log(`${days} dia(s)`);
