var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var r = parseFloat(lines[0]);
var pi = 3.14159
var result = (pi*r*r).toFixed(4);
console.log(`A=${result}`);

/*Solution 2
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
function uncheckParseFloat(text) {
    var result = 0;
    var base = 1;
    var divide = 0;
    for(var i=text.length-1; i>=0; i--) {
        var ascii = text.charCodeAt(i);
        // 46 = "." Na tabela ascii
        if(ascii == 46) {
            divide = base;
        } else {
            // 48 é o digito 0 na tabela ascii
            var n = ascii - 48;
            result += n*base;
            base *= 10;
        }
    }
    return result / divide;
}
var r = uncheckParseFloat(lines[0].replace(",", "."));
var pi = 3.14159
var result = (pi*r*r).toFixed(4);
console.log(`A=${result}`);
*/