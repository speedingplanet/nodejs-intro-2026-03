// Read ../../data/users.csv
import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import path from 'node:path';
import chalk from 'chalk';

// Directory path to this file
let __dirname = import.meta.dirname;
let goodPath = path.resolve(__dirname, '../../data/users.csv');
let badPath = path.resolve(__dirname, '../../data/nonexistent-data.csv');

// Old school: use callbacks
// Check for access permissions
// F_OK indicates a visible file, not necessarily any other RWX permissions

function accessFile(filePath) {
	fs.access(filePath, fs.constants.F_OK, (err) => {
		if (err) {
			console.error(chalk.red(`fs.access: Could not access file at ${filePath}`));
		} else {
			console.log(chalk.blue(`fs.access: File ${filePath} exists and is visible.`));
		}
	});
}

accessFile(goodPath);
accessFile(badPath);

// Promises API
function accessFileWithPromises(filePath) {
	// promise.then(successCallback, failureCallback)
	/*
	fsPromises.access(filePath, fs.constants.F_OK).then(
		() => {
			console.log(chalk.blue(`fs-promises.access: File ${filePath} exists and is visible.`));
		},
		() => {
			console.error(chalk.red(`fs-promises.access: Could not access file at ${filePath}`));
		}
	);
	*/
	// Alternative style: promise.then(successCallback).catch(errorCallback)
	let p1 = fsPromises.access(filePath, fs.constants.F_OK);
	p1.then(() => {
		console.log(chalk.blue(`fs-promises.access: File ${filePath} exists and is visible.`));
	}).catch(() => {
		console.error(chalk.red(`fs-promises.access: Could not access file at ${filePath}`));
	});
}

accessFileWithPromises(goodPath);
accessFileWithPromises(badPath);

// async-await
async function accessFileWithAsyncAwait(filePath) {
	try {
		let accessResult = await fsPromises.access(filePath, fs.constants.F_OK);
		// access() returns `undefined` on success. That's a choice.
		if (!accessResult) {
			console.log(chalk.blue(`async/await: File ${filePath} exists and is visible.`));
		}
	} catch (error) {
		console.error(
			chalk.red(`async/await: Could not access file at ${filePath} because ${error.message}`)
		);
	}
}

accessFileWithAsyncAwait(goodPath);
console.log('Hello!');
accessFileWithAsyncAwait(badPath);
// Do some other stuff
