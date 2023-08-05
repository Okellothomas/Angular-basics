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
var multiple = `Okello thomas 
    is this really your name
    yes certainly it is my name`

console.log(multiple)

/**
 * Embeding variabes in our string
 */

const myschool = 'Kadika primary school!'

let theschool = `Hi okello, my school is ${myschool}, 
    you will be well pleased to know that`

console.log(myschool)