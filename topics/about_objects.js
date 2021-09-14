// module("About Objects (topics/about_objects.js)");
const { equal } = require('assert')
const { __, test } = require('../support/koans')

console.log('------Test objects------')

const object_type = test("object type", () => {
    const empty_object = {};
    equal('object', typeof(empty_object), 'what is the type of an object?');
});

const object_literal = test("object literal notation", () => {
    const person = {
        name: "Amory Blaine",
        age: 102
    };
    equal("Amory Blaine", person.name, "what is the person's name?");
    equal(102, person.age, "what is the person's age?");
});

const object_literal_notation = test("ES6 object literal notation", () => {
    const name = "Amory Blaine"
    const age = 102
    
    const person = {
        name,
        age
    };
    equal("Amory Blaine", person.name, "what is the person's name?");
    equal(102, person.age, "what is the person's age?");
});

const dynamically_properties = test("dynamically adding properties", () => {
    const person = {};
    person.name = "Amory Blaine";
    person.age = 102;
    equal("Amory Blaine", person.name, "what is the person's name?");
    equal(102, person.age, "what is the person's age?");
}); 

const adding_properties = test("adding properties from strings", () => {
    const person = {};
    person["name"] = "Amory Blaine";
    person["age"] = 102;
    equal("Amory Blaine", person.name, "what is the person's name?");
    equal(102, person.age, "what is the person's age?");
});

const adding_functions = test("adding functions", () => {
    const person = {
        name: "Amory Blaine",
        age: 102,
        toString: function() {
            return "I " + person.name + " am " + person.age + " years old.";  // HINT: use the 'this' keyword to refer to the person object.
        }
    };
    equal("I Amory Blaine am 102 years old.", person.toString(), "what should the toString function be?");
});

module.exports = { object_type, object_literal, object_literal_notation, dynamically_properties, adding_properties, adding_functions };