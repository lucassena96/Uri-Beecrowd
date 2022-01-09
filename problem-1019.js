var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseInt(lines[0]);
var hours = parseInt(a/60/60);
var minutes = parseInt((a-(hours*60*60))/60);
var seconds = (a-((minutes*60)+(hours*60*60)));

console.log(`${hours}:${minutes}:${seconds}`);
