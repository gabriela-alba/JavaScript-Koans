// module("About Control Structures (topics/about_control_structures.js)");
const { equal } = require('assert')
const { __, test } = require('../support/koans')

console.log('------Test control structures------')

const if_ = test("if", () => {
	let isPositive = false;
	if (2 > 0) {
		isPositive = true;
	}
	equal(true, isPositive,  'what is the value of isPositive?');
});

const for_ = test("for", () => {
	let counter = 10;
	for (let i = 1; i <= 3; i++) {
		counter = counter + i;
	}
	equal(16, counter, 'what is the value of counter?');
});

const for_in_ = test("for in", () => {
	// this syntax will be explained in about objects
	const person = {
		name: "Amory Blaine",
		age: 102
	};
	let result = "";

	// for in enumerates the property names of an object
	for (let property_name in person) {
  		result = result + property_name;
	}
	equal("nameage", result, 'what is the value of result?');
});

const ternary_operator = test("ternary operator", () => {
	let fruit = true ? "apple" : "orange";
	equal("apple", fruit, 'what is the value of fruit?');

	fruit = false ? "apple" : "orange";
	equal("orange", fruit, 'now what is the value of fruit?');
});

const switch_ = test("switch", () => {
	let result = 0;
	switch (2) {
		case 1:
			result = 1;
			break;
		case 1+1:
			result = 2;
			break;
	}
	equal(2, result, 'what is the value of result?');
});

const switch_default = test("switch default case", () => {
    let result = "Pippin";
    switch ("m") {
        case "f":
            result = "Frodo";
            break;
        case "s":
            result = "Samwise";
                break;
        default:
            result = "Merry";
            break;
    }
    equal("Merry", result, 'what is the value of result?');
});

const null_coalescing = test("null coalescing", () => {
    let result = null || "a value";
    equal("a value", result, 'what is the value of result?');
});

module.exports = { if_, for_, for_in_, ternary_operator, switch_, switch_default, null_coalescing }