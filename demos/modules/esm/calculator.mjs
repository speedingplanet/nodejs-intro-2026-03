// ECMAScript-style module (ESM)
// package.json { type: module }

export function add(x, y) {
	return x + y;
}

export const pi = 3.14;

export let x = 10;
let y = 100;
let z = 1000;
export { z };

let a = 10000;
export { a, y };
