let { add, x } = require('./calculator.cjs');
// Alternative, require the entire package under 'foo'
let foo = require('./calculator.cjs');

console.log(`2 + 2 is ${add(2, 2)}`);
console.log(`x is ${x}`);

// Using the 'foo' require
console.log(`2 + 2 is ${foo.add(2, 2)}`);
console.log(`x is ${foo.x}`);
