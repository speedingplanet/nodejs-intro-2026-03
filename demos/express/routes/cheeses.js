import express from 'express';
let router = express.Router();

/*
{
id: number,
name: string,
origin: string, (Country? State?)
source: string, (cow, sheep, goat),
type: string (hard, soft, blue)
}
*/

let cheeseData = [
	{
		id: 2,
		name: 'cheddar',
		origin: 'Wisconsin',
		source: 'cow',
		type: 'hard',
	},
	{
		id: 3,
		name: 'gorgonzola',
		origin: 'Italy',
		source: 'cow',
		type: 'blue',
	},
	{
		id: 4,
		name: 'goat cheese',
		origin: 'Wisconsin',
		source: 'goat',
		type: 'soft',
	},
];

/*
 * Routes
 * GET /cheeses -> returns an array of cheeses
 * GET /cheeses/2 -> returns the cheese with the ID 2, or null (or error?)
 * POST /cheeses {...cheese} -> adds a new cheese
 * PUT /cheeses/2 {...cheese} -> replaces cheese #2 with the passed-in cheese
 * PATCH /cheeses/2 {...partial cheese} -> merges partial cheese with the cheese with id 2
 * DELETE /cheeses/2 -> Deletes cheese #2
 */

router.get('/', (request, response) => {
	response.json(cheeseData);
});

router.get('/:id', (request, response) => {
	console.log(`Looking for the cheese with id ${request.params.id}`);
	let foundCheese = null;
	/* 
	// Using array.find
	foundCheese = cheeseData.find((cheese) => {
		if (cheese.id === Number(request.params.id)) {
			return true;
		} else {
			console.log(`Could not find cheese ${request.params.id}`);
		}
	});
	*/

	// Using a for..of loop
	for (let cheese of cheeseData) {
		if (cheese.id === Number(request.params.id)) {
			foundCheese = cheese;
			break;
		}
	}

	if (foundCheese) {
		response.json(foundCheese);
	} else {
		response.status(404).send(`Could not find a cheese with the id ${request.params.id}`);
	}
});

router.post('/', (request, response) => {
	let cheeseToAdd = request.body;

	// Set up the correct next ID
	let ids = cheeseData.map((cheese) => cheese.id);
	let lastId = Math.max(...ids);
	cheeseToAdd.id = lastId + 1;

	cheeseData.push(cheeseToAdd);
	response.json(cheeseToAdd);
});

router.patch('/:id', (request, response) => {
	let cheese = findById(cheeseData, 'id', Number(request.params.id));
	if (!cheese) {
		response.status(404).send(`Could not find cheese with the id ${request.params.id}`);
		return;
	}

	let cheeseUpdates = request.body;
	let updatedCheese = { ...cheese, ...cheeseUpdates };

	// Alternative, if older, form of the above
	// let updatedCheese = Object.assign({}, cheese, cheeseUpdates);
	let index = cheeseData.findIndex((cheese) => cheese.id === Number(request.params.id));
	cheeseData[index] = updatedCheese;
	response.json(updatedCheese);
});

function findById(array, property, value) {
	return array.find((item) => item[property] === value);
}

export default router;
