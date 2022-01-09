var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let salary = parseFloat(lines.shift())
if(salary>0.00 && salary<=2000.00){
    console.log("Isento");
}else if(salary>2000 && salary<=3000.00){
    let taxes = (salary-2000)*0.08
    console.log(`R$ ${taxes.toFixed(2)}`);
}else if(salary>3000 && salary<=4500){
    let free = (salary-2000)
    let taxes2 = (free-1000)*0.18
    let taxes1 = 1000*0.08
    let taxes = taxes2+taxes1
    console.log(`R$ ${taxes.toFixed(2)}`)
}else{
    let free = (salary-2000)
    let taxes1 = 1000*0.08
    let taxes2 = 1500*0.18
    let taxes3 = (free-2500)*0.28
    let taxes = taxes1+taxes2+taxes3
    console.log(`R$ ${taxes.toFixed(2)}`);
};

