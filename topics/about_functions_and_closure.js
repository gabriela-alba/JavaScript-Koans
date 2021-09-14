// module("About Functions And Closure (topics/about_functions_and_closure.js)");
const { equal } = require('assert')
const { __, test } = require('../support/koans')

console.log('------Test function and closure------')

const defining_functions = test("defining functions directly", () => {
    let result = "a";
    function changeResult() {
        // the ability to access a variables defined in the same scope as the function is known as 'closure'
        result = "b";
    };
    changeResult();
    equal('b', result, 'what is the value of result?');
});

const assignig_functions = test("assigning functions to variables", () => {
    const triple = (input) => {
        return input * 3;
    };
    equal(12, triple(4), 'what is triple 4?');
});

const self_functions = test("self invoking functions", () => {
    const publicValue = "shared";

    // self invoking functions are used to provide scoping and to alias variables
    (function(pv) {
        const secretValue = "password";
        equal(publicValue, pv, 'what is the value of pv?');
        equal("string", typeof(secretValue), "is secretValue available in this context?");
        equal("string", typeof(publicValue), "is publicValue available in this context?");
    })(publicValue);

    equal("undefined", typeof(secretValue), "is secretValue available in this context?");
    equal("string", typeof(publicValue), "is publicValue available in this context?");
});

const arguments_arrays = test("arguments array", () => {
    const add = function() {
        let total = 0;
        for(let i = 0; i < arguments.length; i++) {
            // complete the implementation of this method so that it returns the sum of its arguments
            //
           total += arguments[i]
        }
        return total;
    };

    equal(15, add(1,2,3,4,5), "add 1,2,3,4,5");
    equal(9, add(4,7,-2), "add 4,7,-2");
});

const invoke_function = test("using call to invoke function", () => {
    const invokee = function(message) {
        return this + message;    
    };
    
    //another way to invoke a function is to use the call function which allows 
    //you to set the callers "this" context.  Call can take any number of arguments: 
    //the first one is always the context that this should be set to in the called
    //function, and the arguments to be sent to the function,multiple arguments are separated by commas.
    const result = invokee.call("I am this!", " Where did it come from?");
        
    equal('I am this! Where did it come from?', result, "what will the value of invokee's this be?");
});

const invoke_function_2 = test("using apply to invoke function", () => {
    const invokee = function(message1, message2) {
        return this + message1 + message2;    
    };
    
    //similar to the call function is the apply function.  Apply only has two
    //arguments:  the first is the context that this should be set to in the called
    //function and the second is the array of arguments to be passed into the called function.
    const result = invokee.apply("I am this!", [" I am arg1", " I am arg2"]);
        
    equal('I am this! I am arg1 I am arg2', result, "what will the value of invokee's this be?");
});

module.exports = { defining_functions, assignig_functions, self_functions, arguments_arrays, invoke_function, invoke_function_2 };
