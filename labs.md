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

Change your code so that ONLY the `describe` block with the `divide` tests runs (e.g. do not run `subtract` or `multiply` tests).

Finish by making sure that all tests in all blocks run.

## Async and the filesystem

### Part 1

Use `fs.readFile` to read the contents of data/users.csv

Create `demos/filesystem/get-users.js`.

Use this code to load the necessary libraries and configure the path to the file

```js
import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import path from 'node:path';
let __dirname = import.meta.dirname;
let filePath = path.resolve(__dirname, '../../data/users.csv');
```

Docs:
Promises version: https://nodejs.org/docs/latest-v24.x/api/fs.html#fspromisesreadfilepath-options
Callback version: https://nodejs.org/docs/latest-v24.x/api/fs.html#fsreadfilepath-options-callback

Note that you should use the version from fs/promises, unless you want to experiment with callbacks

Print out a count of the number of lines, and a sample of the first five lines.

### Part 2

Use `fs-extra.pathExists` to check the existence of a file
Docs: https://github.com/jprichardson/node-fs-extra/blob/master/docs/pathExists.md

### Part 3

Use `fs.appendFile` to add a line to the file:
Docs:
Promises version: https://nodejs.org/docs/latest-v24.x/api/fs.html#fspromisesappendfilepath-data-options
Callback version: https://nodejs.org/docs/latest-v24.x/api/fs.html#fsappendfilepath-data-options-callback

Note that you should use the version from fs/promises, unless you want to experiment with callbacks

Line to add (or make up your own):
1001,John,Paxton,pax@speedingplanet.com,Nutley,New Jersey,United States

## REST Server

### Part 1: Setting up the server

Set up a server in an `app` folder in the root of our project.

We can work with most of the code that's in demos/express.

Getting express up and running on a port of our choice with our own message is our goal for this exercise

### Part 2: GET /users

We want the REST path `GET /users` to work. What do we need to do?

### Part 3: GET /users/{id}

### Part 4: Building a data access layer

### Part 5: POST /users

### Part 6: PATCH /users/{id}

### Part 7: DELETE /users/{id}
