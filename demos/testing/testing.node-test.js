import test from 'node:test';
import assert from 'node:assert';

// test(description, testFunction)
test('Basic test (arrow version)', () => {
	// This test passes because it does not throw an exception.
	// 1 === 1
	assert.strictEqual(1, 1);
});

test('Basic test (function declaration)', function () {
	// This test passes because it does not throw an exception.
	assert.strictEqual(1, 1);
});
