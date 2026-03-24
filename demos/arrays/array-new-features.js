const states = ['NJ', 'MA', 'CA', 'IL', 'FL'];

// Should print out CA
console.log(states.at(2));
console.log(states[2]);

// Getting the last element
// at() allows for negative values to count from the end of the array
console.log(states.at(-1));
console.log(states[states.length - 1]);

/*
 * Array.prototype.toSorted() creates a new, sorted array
 * rather than Array.prototype.sort() which sorts in-place
 *
 * There are similar functions for reverse()/toReversed()
 * and splice()/toSpliced()
 */
let sortedStates = states.toSorted();
console.log(states);
console.log(sortedStates);

// Array.prototype.with(index, newValue) creates a copy of the
// original array with the value at index replaced by newValue
let changedStates = states.with(1, 'PA');
console.log(states);
console.log(changedStates);
