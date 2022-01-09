var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linhas = lines[0].split(" ");
let n1 = parseFloat(linhas[0]);
let n2 = parseFloat(linhas[1]);
let n3 = parseFloat(linhas[2]);
let n4 = parseFloat(linhas[3]);
let media = ((n1*2 + n2*3 + n3*4 + n4*1)/10);
console.log(`Media: ${media.toFixed(1)}`);

if(media>=7){
    console.log("Aluno aprovado.");
}else if(media<5){
    console.log("Aluno reprovado.");
}else{
    let nota_exame = parseFloat(lines[1]);
    console.log("Aluno em exame.");
    console.log(`Nota do exame: ${nota_exame.toFixed(1)}`);
    var new_average = (nota_exame+media)/2
    if(new_average>=5){
        console.log("Aluno aprovado.");
    }else{
        console.log("Aluno reprovado.");
    }
    console.log(`Media final: ${new_average.toFixed(1)}`);
};

