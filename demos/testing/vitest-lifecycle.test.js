import { test, expect, beforeEach, beforeAll, afterEach, afterAll } from 'vitest';

test('Test 1', () => expect(1).toBeTruthy());
test('Test 2', () => expect(1).toBeTruthy());

beforeAll(() => {
	console.log('This runs once before all tests.');
});

beforeEach(() => {
	console.log('This runs once before EACH test.');
});

afterEach(() => {
	console.log('This runs once after EACH test.');
});

afterAll(() => {
	console.log('This runs once after all tests.');
});
