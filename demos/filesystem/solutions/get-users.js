import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import path from 'node:path';
import chalk from 'chalk';
let __dirname = import.meta.dirname;

// Extra directory up because this is in the 'solutions' folder
let filePath = path.resolve(__dirname, '../../../data/users.csv');

/*
try {
	let contents = await fsPromises.readFile(filePath, { encoding: 'utf8' });
	let lines = contents.split(/\n/);
	console.log(`There are ${lines.length} lines.`);
	console.log(lines.slice(0, 5));
} catch (error) {
	console.error(`Failed reading file because ${error.message}`);
}
*/

async function getLines() {
	try {
		let contents = await fsPromises.readFile(filePath, { encoding: 'utf8' });
		let lines = contents.split(/\n/);
		console.log(`There are ${lines.length} lines.`);
		console.log(lines.slice(0, 5));
	} catch (error) {
		console.error(chalk.red(`Failed reading file because ${error.message}`));
		throw new Error('File read failed');
		// or just re-throw the original error
		// throw error
	}
}

console.log('before');
try {
	getLines();
} catch (err) {
	console.log(chalk.yellow(`What happened? ${err.message}`));
}
console.log('after');
