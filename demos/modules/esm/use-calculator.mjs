import { add, x } from './calculator.mjs';

// Alternative, import the entire package under 'foo'
import * as foo from './calculator.mjs';

console.log(`2 + 2 is ${add(2, 2)}`);
console.log(`x is ${x}`);

// Using the 'foo' import
console.log(`2 + 2 is ${foo.add(2, 2)}`);
console.log(`x is ${foo.x}`);
