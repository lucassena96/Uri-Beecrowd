var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines.shift());
let months = [[1, "January"],[2, "February"], [3, "March"], [4, "April"], [5, "May"],[6, "June"],
[7, "July"], [8, "August"], [9, "September"], [10, "October"], [11, "November"], [12, "December"]];
let meses = new Map(months);
console.log(meses.get(x));

// Solution 2 
/*
let lines = ["11"];

let key = parseInt(lines.shift());

const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
}
console.log(months[key]);

*/