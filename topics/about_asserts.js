
const { ok, equal } = require('assert')
const { __, test } = require('../support/koans')

console.log('------Test asserts------')

const ok_1 = test("ok", () => {
    ok(true === true, 'what will satisfy the ok assertion?');
})

const not_ok = test("not ok", () => {
    ok(false === false, 'what is a false value?');
})

const ok_2 = test("ok", () => {
    equal(2, 1 + 1, 'what will satisfy the equal assertion?');
})

module.exports = { ok_1, not_ok, ok_2 };
