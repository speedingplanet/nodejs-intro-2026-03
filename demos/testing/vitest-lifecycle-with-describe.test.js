import { test, expect, describe, beforeEach, beforeAll } from 'vitest';

// How many times will this run? (4 times)
beforeEach(() => console.log('Outer beforeEach'));

describe('First two tests', () => {
	// How many times will this run? (2 times)
	beforeEach(() => console.log('Inner beforeEach'));
	test('Test 1', () => {
		expect(1).toBeTruthy();
	});
	test('Test 2', () => {
		expect(2).toBeTruthy();
	});
});

describe('Last two tests', () => {
	test('Test 3', () => {
		expect(3).toBeTruthy();
	});
	test('Test 4', () => {
		expect(4).toBeTruthy();
	});
});

// How many times will this run? (Once)
beforeAll(() => console.log('Outer beforeAll'));
