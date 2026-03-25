/* eslint-disable */
function addTyped(x: number, y: number): number {
	return x + y;
}

let result1 = addTyped(2, 4);
// let result2 = addTyped(2, '4');
console.log(`result1: ${result1}`);
// console.log('result2', result2);

function addListTyped(...args: number[]): number {
	let total = 0;
	for (let n of args) {
		total = total + n;
	}

	return total;
}

let result3 = addListTyped(1, 2, 3);
// let result4 = addListTyped(1, '2', 3);
