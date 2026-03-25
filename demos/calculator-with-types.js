// @ts-check

/**
 * @param {number[]} numbers
 */
function add(...numbers) {
	let total = 0;
	for (let n of numbers) {
		total = total + n;
	}
	return total;
}

// Remove the statement below to see an error
// @ts-ignore
add(1, 2, 3, '7', 5, 4);

/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function addJsDoc(x, y) {
	return x + y;
}

// Remove the statement below to see an error
// @ts-ignore
addJsDoc(1, '2');
