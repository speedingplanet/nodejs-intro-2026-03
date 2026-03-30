import { test, expect, describe, afterAll } from 'vitest';
import { subtract, multiply } from '../calculator.js';

describe('sutract() tests', () => {
	afterAll(() => console.log('All subtract() tests complete.'));

	test('subtract() test 1', () => {
		expect(subtract(10, 1)).toBe(9);
	});
});

describe('multiply() tests', () => {
	test('multiply test 1', () => {
		expect(multiply(5, 5, 4)).toBe(100);
	});
	afterAll(() => console.log('All multiply() tests complete.'));
});
