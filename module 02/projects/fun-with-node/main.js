var colors = require('colors');
var math = require('mathjs');

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

var x = max(10, 20);
var y = max(15, 5);

var z = math.sqrt(-4);

console.log('Hello World'.green);
console.log('the max between 10, 20 is'.blue, x);
console.log('the max between 15, 5 is'.magenta, y);
console.log('the square root of -4 is'.red, z);