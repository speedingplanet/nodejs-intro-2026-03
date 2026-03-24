import { expect, test, describe } from 'vitest';
import { add /* , subtract, multiply, divide */ } from './calculator.js';

// test(description, testingFunction)
// it('should add 4 + 6 to equal 10', () => {})

test('add() function', () => {
	// Maybe break this into smaller tests?
	// expect(actual).toMatch(expected)
	expect(add(4, 6)).toBe(10);
	expect(add(null, 6)).toBe(6);
	expect(add(4, -6)).toBe(-2);
	expect(add(2, 3, 4, 5)).toBe(14);
	expect(add(2, 3, 4, 5, 6, 7, 8)).toBe(35);
});

describe('Smaller, focused tests', () => {
	test('add() 2 arguments', () => {
		// expect(actual).toMatch(expected)
		expect(add(4, 6)).toBe(10);
	});

	test('add() with unexpected values', () => {
		expect(add(null, 6)).toBe(6);
		expect(add('5', 6)).toBe('65');
	});

	test('add() with a negative', () => {
		expect(add(4, -6)).toBe(-2);
	});

	test('add() multiple args', () => {
		expect(add(2, 3, 4, 5)).toBe(14);
	});
	test('add() lots of args', () => {
		expect(add(2, 3, 4, 5, 6, 7, 8)).toBe(35);
	});

	test('add: 2, 3, 4, 5', () => {
		expect(add(2, 3, 4, 5)).toBe(14);
	});
});
