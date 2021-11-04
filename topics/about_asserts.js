
const { ok, equal } = require('assert')
const { __, test } = require('../support/koans')

console.log('------Test asserts------')

const tests = () => {
    test("ok", () => {
        ok(true === true, 'what will satisfy the ok assertion?');
    })

    test("not ok", () => {
        ok(false === false, 'what is a false value?');
    })

    test("ok", () => {
        equal(2, 1 + 1, 'what will satisfy the equal assertion?');
    })
}

module.exports = tests
