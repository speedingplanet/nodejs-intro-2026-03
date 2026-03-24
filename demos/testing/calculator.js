export function add(...args) {
	return args.reduce((total, arg) => arg + total);
}

export function subtract(...args) {
	let initialValue = args.shift();
	return args.reduce((total, arg) => total - arg, initialValue);
}

export function multiply(...args) {
	let initialValue = args.shift();
	return args.reduce((total, arg) => total * arg, initialValue);
}

export function divide(...args) {
	let initialValue = args.shift();
	return args.reduce((total, arg) => total / arg, initialValue);
}
