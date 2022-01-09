var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines[0]);
var CemReais = parseInt(a/100);
var CinquentaReais = parseInt((a-(CemReais*100))/50);
var VinteReais = parseInt((a-((CemReais*100)+(CinquentaReais*50)))/20);
var DezReais = parseInt((a-((CemReais*100)+(CinquentaReais*50)+(VinteReais*20)))/10);
var CincoReais = parseInt((a-((CemReais*100)+(CinquentaReais*50)+(VinteReais*20)+(DezReais*10)))/5);
var DoisReais = parseInt((a-((CemReais*100)+(CinquentaReais*50)+(VinteReais*20)+(DezReais*10)+(CincoReais*5)))/2);
var UmReal = parseInt((a-((CemReais*100)+(CinquentaReais*50)+(VinteReais*20)+(DezReais*10)+(CincoReais*5)+(DoisReais*2)))/1);

console.log(a);
console.log(`${CemReais} nota(s) de R$ 100,00`);
console.log(`${CinquentaReais} nota(s) de R$ 50,00`);
console.log(`${VinteReais} nota(s) de R$ 20,00`);
console.log(`${DezReais} nota(s) de R$ 10,00`);
console.log(`${CincoReais} nota(s) de R$ 5,00`);
console.log(`${DoisReais} nota(s) de R$ 2,00`);
console.log(`${UmReal} nota(s) de R$ 1,00`);
