import { curry, compose, pipe } from 'ramda';

// Problem
function multiply(value, multiplier) {
	return value * multiplier;
}

const numbers = [44, 3, 84, 23];

numbers.map(function double(number) {
	return multiply(number, 2);
}); /*?*/

// numbers.map(multiply(2)); // Wrong shape! 🙁

// Show what is Partial Application
const double = multiply.bind(null, 2);
double(5); /*?*/

numbers.map((number) => double(number));

// Unary functions
const unary = (x) => console.log(x);
const binary = (x, y) => x + y;

// Show what is Currying (manually)
const unaryCurrying = (x) => (y) => x + y;
unaryCurrying(1); /*?*/
unaryCurrying(1)(2); /*?*/

const unaryFunc = function (x) {
	return function (y) {
		return x + y;
	};
};

const bookshelf = [
	{ title: 'Total Recall', pages: 656, genre: 'biography' },
	{ title: 'Stillness Is the Key', pages: 288, genre: 'philosophy' },
	{ title: 'Creativity, Inc.', pages: 368, genre: 'business' },
	{ title: 'Sapiens', pages: 498, genre: 'nonfiction' },
	{ title: 'Do the work', pages: 114, genre: 'nonfiction' },
	{ title: 'Outliers', pages: 309, genre: 'business' },
	{ title: 'MAKE: Bootstrappers Handbook', pages: 194, genre: 'business' },
];

const hasProperty = curry((property, value, obj) => obj[property] === value);
const getProperty = curry((property, obj) => obj[property]);

// const getBusiness = (list) => list.filter((book) => book.genre === 'business');
const getBusiness = (list) => list.filter(hasProperty('genre', 'business')); /*?*/
const getPages = (list) => list.map(getProperty('pages')); /*?*/
const countPages = (book) => book.reduce((acc, value) => acc + value); /*?*/

// const getBusiness = (list) => list.filter((book) => book.genre === 'business');
// const getPages = (list) => list.map(({ pages }) => pages);
// const countPages = (book) => book.reduce((acc, pages) => acc + pages);

compose(countPages, getPages, getBusiness)(bookshelf); /*?*/
// compose(getBusiness)(bookshelf); /*?*/
pipe(getBusiness, getPages, countPages)(bookshelf); /*?*/

compose(Wrapper, List, map(listItem))(items);
