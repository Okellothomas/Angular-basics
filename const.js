// const variable are block-level scoping for variables
var thename = 'james';
"use strict";
var person = Object.freeze({
    name: '',
    lastname: ''
});
var student = {
    firstname: 'Okello',
    lastname: 'Thomas'
};
student.lastname = 'James';
console.log(student);
/**
 * using backstick to write multiple lines
 */
var multiple = "Okello thomas \n    is this really your name\n    yes certainly it is my name";
console.log(multiple);
/**
 * Embeding variabes in our string
 */
var myschool = 'Kadika primary school!';
var theschool = "Hi okello, my school is ".concat(myschool, ", \n    you will be well pleased to know that");
console.log(theschool);
