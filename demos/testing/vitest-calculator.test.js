import { expect, test } from 'vitest';
import { add /* , subtract, multiply, divide */ } from './calculator.js';

test('add: 2 + 3 = 5', () => {
	expect(add(2, 3)).toBe(5);
});

test('add: 2, 3, 4, 5', () => {
	expect(add(2, 3, 4, 5)).toBe(14);
});
