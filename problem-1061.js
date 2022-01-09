var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let lines_0 = lines[0].split(" ");
let lines_1 = lines[1].split(" :");
let lines_2 = lines[2].split(" ");
let lines_3 = lines[3].split(" :");

let day_start = parseInt(lines_0[1]);
let day_finish = parseInt(lines_2[1]);
let h_inicial = parseInt(lines_1[0]);
let m_inicial = parseInt(lines_1[1]);
let s_inicial = parseInt(lines_1[2]);
let h_final = parseInt(lines_3[0]);
let m_final = parseInt(lines_3[1]);
let s_final = parseInt(lines_3[2]);
let tempo_inicial = (h_inicial*60*60)+(m_inicial*60)+(s_inicial);
let tempo_final = (h_final*60*60)+(m_final*60)+(s_final);


if(tempo_inicial>tempo_final){
    let dias = (day_finish-day_start)-1
    console.log(`${dias} dia(s)`);
    let horas = Math.floor(24-((tempo_inicial-tempo_final)/3600));
    console.log(`${horas} hora(s)`);
    let minutos = Math.floor(60-((tempo_inicial-tempo_final)%3600)/60);
    console.log(`${minutos} minuto(s)`);
    let segundos = 60-(((tempo_inicial-tempo_final)%3600)%60);
    console.log(`${segundos} segundo(s)`);
    
}else{
    let dias = day_finish-day_start;
    console.log(`${dias} dia(s)`);
    let horas = Math.floor(Math.abs(tempo_inicial-tempo_final)/3600);
    console.log(`${horas} hora(s)`);
    let minutos = Math.floor(Math.abs(tempo_inicial-tempo_final)%3600/60);
    console.log(`${minutos} minuto(s)`);
    let segundos = Math.abs(((tempo_inicial-tempo_final)%3600)%60);
    console.log(`${segundos} segundo(s)`);
};

