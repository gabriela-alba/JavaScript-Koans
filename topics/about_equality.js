// module("About Equality (topics/about_equality.js)");
const { equal, ok } = require('assert')
const { __, test } = require('../support/koans')

console.log('------Test equality------')

const numeric_equality = test("numeric equality", () => {
    equal(3 + 4,  7, "");
});

const string_equality = test("string equality", () => {
    equal("3" + 7, "37", "concatenate the strings");
});

const equality_coercion_1 = test("equality without type coercion", () => {
    ok(3 === 3, 'what is exactly equal to 3?');
});

const equality_coercion_2 = test("equality with type coercion", () => {
    ok(3 == "3", 'what string is equal to 3, with type coercion?');
});

const string_literals = test("string literals", () => {
    equal("frankenstein", "frankenstein", "quote types are interchangable, but must match.");
    equal('frankenstein', 'frankenstein', "quote types can use both single and double quotes.");
});

module.exports = { numeric_equality, string_equality, equality_coercion_1, equality_coercion_2, string_literals };
