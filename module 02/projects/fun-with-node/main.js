function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

var x = max(10, 20);
var y = max(15, 5);
console.log('the max between 10, 20 is', x);
console.log('the max between 15, 5 is', y);