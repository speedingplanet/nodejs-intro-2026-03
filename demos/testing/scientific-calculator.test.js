import { test, expect } from 'vitest';
import { sciMultiply } from './scientific-calculator';

test('Testing sciMultiply, no errors', () => {
	let args = [1, 2, 3];
	expect(() => sciMultiply(...args)).not.toThrow(/Wrong/);
});

test('Testing sciMultiply, with errors', () => {
	let args = [1, 2, 3, 'abc'];
	expect(() => sciMultiply(...args)).toThrow();
});
