var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let palavra1 = lines.shift();
let palavra2 = lines.shift();
let palavra3 = lines.shift();
if(palavra1 === "vertebrado"){
    if(palavra2 === "ave"){
        if(palavra3 === "carnivoro"){
            console.log("aguia");
        }
        if(palavra3 === "onivoro"){
            console.log("pomba");
        }
    }
    if(palavra2 === "mamifero"){
        if(palavra3 === "onivoro"){
            console.log("homem");
        }
        if(palavra3 === "herbivoro"){
            console.log("vaca");
        }
    }
}
if(palavra1 === "invertebrado"){
    if(palavra2 === "inseto"){
        if(palavra3 === "hematofago"){
            console.log("pulga");
        }
        if(palavra3 === "herbivoro"){
            console.log("lagarta");
        }
    }
    if(palavra2 === "anelideo"){
        if(palavra3 === "hematofago"){
            console.log("sanguessuga");
        }
        if(palavra3 === "onivoro"){
            console.log("minhoca");
        }
    }
};

