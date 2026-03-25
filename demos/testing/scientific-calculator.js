import { multiply } from './calculator.js';

export function sciMultiply(...args) {
	// Check for proper data types
	for (let a of args) {
		if (typeof a !== 'number') {
			throw new Error('Wrong argument type, expected number');
		}
	}

	return multiply(...args);
}
