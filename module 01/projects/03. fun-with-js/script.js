function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.log = function() {
    console.log('Name:', this.name, 'Age:', this.age);
}

function max(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}


var p1 = new Person('John', 20);
var p2 = new Person('Jane', 25);

p1.name = 'Smith';
p1.log();

p1.log.call(p2);

setTimeout(p1.log.bind(p1) , 5000);

// var res = max("5", 20);
// console.log('The max is ', res);
// console.log('the type of result is', typeof res);