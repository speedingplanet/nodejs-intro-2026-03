// Spying example
import { test, expect, vi } from 'vitest';

// Only works with `import * as ...`
import * as calculator from './calculator.js';

test('Spy test', () => {
	let spy = vi.spyOn(calculator, 'hook');
	expect(spy).not.toHaveBeenCalled();
	calculator.subtract(4, 5);
	expect(spy).toHaveBeenCalled();
});
