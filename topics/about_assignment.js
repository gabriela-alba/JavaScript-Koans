// module("About Assignment (topics/about_assignment.js)");
const { equal } = require('assert')
const { __, test } = require('../support/koans')

console.log('------Test assigment------')

const local_variables = test("local variables", () => {
    const temp = 1;
    equal(temp, 1, "Assign a value to the variable temp");
});

const global_variables = test("global variables", () => {
    temp = 1; // Not using var is an example. Always use var in practise.
    equal(global.temp, temp, 'global variables are assigned to the global object');
});

module.exports = { local_variables, global_variables };
