import { test, expect, describe } from 'vitest';

describe('Skip/only, group 1', () => {
	test.only('Group 1, test 1', () => {
		expect(1).toBeTruthy();
	});

	// test.todo('Group 1, test 2', () => {});
	test('Group 1, test 2', () => {});

	// test.skip('Group 1, test 3', () => {
	test.only('Group 1, test 3', () => {
		expect(1).toBeTruthy();
	});
});

describe.skip('Skip/only, group 2', () => {
	test('Group 2, test 1', () => {
		expect(1).toBeTruthy();
	});

	test('Group 2, test 2', () => {
		expect(1).toBeTruthy();
	});

	test('Group 2, test 3', () => {
		expect(1).toBeTruthy();
	});
});
