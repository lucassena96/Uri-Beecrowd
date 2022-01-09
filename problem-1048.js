var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let salary = parseFloat(lines.shift());

if(salary>=0 && salary<=400.00){
    var percentual = 15;
    var reajuste = salary*(percentual/100);
    salary += reajuste;
}else if(salary>400.00 && salary<=800.00){
    var percentual = 12;
    var reajuste = salary*(percentual/100);
    salary += reajuste;
}else if(salary>800.00 && salary<=1200.00){
    var percentual = 10;
    var reajuste = salary*(percentual/100);
    salary += reajuste;
}else if(salary>1200.00 && salary<=2000.00){
    var percentual = 7;
    var reajuste = salary*(percentual/100);
    salary += reajuste;
}else{
    var percentual = 4;
    var reajuste = salary*(percentual/100);
    salary += reajuste;
}
console.log(`Novo salario: ${salary.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
console.log(`Em percentual: ${percentual} %`);
