export function add(...args) {
	return args.reduce((total, arg) => arg + total);
}

export function addOld(x, y) {
	return x + y;
}

export function subtract(...args) {
	let initialValue = args.shift();

	// Works by using the `this` keyword
	// `this` is a reference to the execution context for this code
	this?.hook();
	if (this !== undefined && this !== null) {
		this.hook();
	}

	// Will break the test, because `hook` without a `this` cannot be
	// spied on.
	return args.reduce((total, arg) => total - arg, initialValue);
}

export function hook(msg) {
	console.log(msg);
}

export function multiply(...args) {
	let initialValue = args.shift();
	return args.reduce((total, arg) => total * arg, initialValue);
}

export function divide(...args) {
	let initialValue = args.shift();
	return args.reduce((total, arg) => total / arg, initialValue);
}
