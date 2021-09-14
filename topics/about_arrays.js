// module("About Arrays (topics/about_arrays.js)");
const { equal, deepEqual } = require('assert')
const { __, test } = require('../support/koans')

console.log('------Test arrays------')

const array_literal = test("array literal syntax and indexing", () => {
    const favouriteThings = ["cellar door", 42, true]; // note that array elements do not have to be of the same type
    equal("cellar door", favouriteThings[0], 'what is in the first position of the array?');
    equal(42, favouriteThings[1], 'what is in the second position of the array?');
    equal(true, favouriteThings[2], 'what is in the third position of the array?');
});

const array_type = test("array type", () => {
    equal('object', typeof([]), 'what is the type of an array?');
});

const array_length = test("length", () => {
    const collection = ['a','b','c'];
    equal(3, collection.length, 'what is the length of the collection array?');
});

const array_splice = test("splice", () => {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const workingWeek = daysOfWeek.splice(0, 5);
    const weekend = daysOfWeek;

    deepEqual(workingWeek, ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], 'what is the value of workingWeek?');
    deepEqual(weekend, ['Saturday', 'Sunday'], 'what is the value of weekend?');
});

const stack_methods = test("stack methods", () => {
    const stack = [];
    stack.push("first");
    stack.push("second");

    equal("second", stack.pop(), 'what will be the first value popped off the stack?');
    equal("first", stack.pop(), 'what will be the second value popped off the stack?');
});

const queue_methods = test("queue methods", () => {
    const queue = [];
    queue.push("first");
    queue.push("second");
    queue.unshift("third");

    equal("third", queue.shift(), 'what will be shifted out first?');
    equal("first", queue.shift(), 'what will be shifted out second?');
});

module.exports = { array_literal, array_type, array_length,array_splice, stack_methods, queue_methods }; 