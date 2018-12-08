/* eslint-disable */

function doubleAfter2Seconds(x) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(x * 2);
		}, 2000);
	});
}

export const testRest = () => {
	const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
};

export const testSpread = () => {
	const obj = { x: 1, y: 2, a: 3, b: 4 };
	const newObj = { ...obj };
};

export const testAsyncAwait = async () => {
	const double = await doubleAfter2Seconds(5);
};

export const testGenerator = () => {
	function* gen() { 
		yield 1;
		yield 2;
		yield 3;
	}

	let g = gen();
};

export const testClassProperties = () => {
	class Foo {
		bar = 'baz';

		constructor() {
		}
	}

	const foo = new Foo();
};

export default [
	testRest,
	testSpread,
	testAsyncAwait,
	testGenerator,
	testClassProperties,
];
