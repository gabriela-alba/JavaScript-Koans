//module("About Truthyness (topics/about_truthyness.js)");
const { equal, deepEqual } = require('assert')
const { __, test } = require('../support/koans')

console.log('------Test truthyness------')

const truthyness_positive = test("truthyness of positive numbers", () => {
    const oneIsTruthy = 1 ? true : false;
    equal(true, oneIsTruthy, 'is one truthy?');
});

const truthyness_negative = test("truthyness of negative numbers", () => {
    const negativeOneIsTruthy = -1 ? true : false;
    equal(true, negativeOneIsTruthy, 'is -1 truthy?');
});

const truthyness_zero = test("truthyness of zero", () => {
    const zeroIsTruthy = 0 ? true : false;
    equal(false, zeroIsTruthy, 'is 0 truthy?');
});

const truthyness_null = test("truthyness of null", () => {
    const nullIsTruthy = null ? true : false;
    equal(false, nullIsTruthy, 'is null truthy?');
});

module.exports = { truthyness_positive, truthyness_negative, truthyness_zero, truthyness_null };
