// module("About Scope (topics/about_scope.js)");
const { equal } = require('assert')
const { __, test } = require('../support/koans')

console.log('------Test scope------')

thisIsAGlobalVariable = 77;

const tests = () => {
    test("global variables", () => {
        equal(77, thisIsAGlobalVariable, 'is thisIsAGlobalVariable defined in this scope?');
    });

    test("variables declared inside of a function", () => {
        let outerVariable = "outer";

        // this is a self-invoking function. Notice that it calls itself at the end ().
        (function() {
            let innerVariable = "inner";
            equal("outer", outerVariable, 'is outerVariable defined in this scope?');
            equal("inner", innerVariable, 'is innerVariable defined in this scope?');
        })();

        equal("outer", outerVariable, 'is outerVariable defined in this scope?');
        equal('undefined', typeof(innerVariable), 'is innerVariable defined in this scope?');
    });
}

module.exports = tests