const scripts = [
    './topics/about_arrays',
    './topics/about_asserts',
    './topics/about_assignment',
    './topics/about_control_structures',
    './topics/about_equality',
    './topics/about_functions_and_closure',
    './topics/about_numbers',
    './topics/about_objects',
    './topics/about_operators',
    './topics/about_prototypal_inheritance',
    './topics/about_prototype_chain',
    './topics/about_reflection',
    './topics/about_regular_expressions',
    './topics/about_scope',
    './topics/about_strings',
    './topics/about_this',
    './topics/about_truthyness',
]

scripts.forEach((script) => {
    const getFuncion = require(script)
    getFuncion()
})



