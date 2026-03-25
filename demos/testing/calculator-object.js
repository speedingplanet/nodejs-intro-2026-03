function add(...args) {
	return args.reduce((total, arg) => arg + total);
}

function subtract(...args) {
	let initialValue = args.shift();
	this.hook('Hello!');
	return args.reduce((total, arg) => total - arg, initialValue);
}

function hook(msg) {
	console.log(msg);
}

function multiply(...args) {
	let initialValue = args.shift();
	return args.reduce((total, arg) => total * arg, initialValue);
}

function divide(...args) {
	let initialValue = args.shift();
	return args.reduce((total, arg) => total / arg, initialValue);
}

const calculator = {
	add,
	subtract,
	multiply,
	divide,
	hook,
};

export default calculator;
