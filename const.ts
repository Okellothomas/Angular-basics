// const variable are block-level scoping for variables
const thename = 'james';

"use strict"
const person = Object.freeze({
    name: '',
    lastname: ''
});

const student = {
    firstname: 'Okello',
    lastname: 'Thomas'
}

student.lastname = 'James';

console.log(student)

/**
 * using backstick to write multiple lines
 */
