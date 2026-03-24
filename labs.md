# Intro Node.js Labs

## Testing

### Part 1

In demos/testing, create a file, `vitest-subtraction.test.js`.

Add some tests for the `subtract` function in calculator.js. Use `vitest-calculator.test.js` for inspiration. You can find matchers here: https://vitest.dev/api/expect.html.

Run the tests with `npm run vitest` (if you didn't leave it running).

Get all your tests to pass.

### Part 2

Group all of your `subtract` tests under a `describe` block.

Add another `describe` block that tests the `multiply` function.

Make sure your tests are still passing (even with an empty block for `multiply`)

Add some tests to that block to test the `multiply` function.

Keep making sure that your tests are passing

Add a call to each `describe` block that prints "[name of block] tests finished" when all tests have run. (For example "subtract tests finished".)

Run your tests again and make sure you see the output you expect.

### Part 3

Add a `describe` block for the `divide` function. Stub out a few tests like this:

```
test.todo('divide with two arguments');
test.todo('divide with multiple arguments');
test.todo('divide with zero as an argument');
```

Run your tests. What does the ouput look like?

What happens if you change the `describe` block for `divide` to be `describe.skip()`?

Implement one of the tests under the `divide` block.

Can you write your tests so that ONLY the single implemented `divide` test runs?

Change your code so that ONLY the `describe` block with the `divide` tests run (e.g. do not run `subtract` or `multiply` tests).

Finish by making sure that all tests in all blocks run.
