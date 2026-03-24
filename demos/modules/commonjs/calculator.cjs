// CommonJS style module
// package.json { type: commonjs }

function add(x, y) {
	return x + y;
}

module.exports = {
	add,
	pi: 3.14,
	x: 10,
	z: 1000,
};
