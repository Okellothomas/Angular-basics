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
// The arrow function
var ping = function () {
    setTimeout(function () {
        console.log('ping');
    }, 1000);
};
ping();
var pong = function () {
    setTimeout(function () { console.log('Pong'), 1100; });
};
pong();
/**
 * Object destructuring in javascript
 */
var theperson = {
    first: 'Okello',
    second: 'Thomas',
    last: 'Olal'
};
var firstname = theperson.first, secondname = theperson.second, lastname = theperson.last;
console.log(secondname);
console.log(theperson.second);
/**
 * the case of array destructuring
 */
var myArray = [1, 3, 4];
var a = myArray[0], b = myArray[1], c = myArray[2];
console.log(c);
console.log(myArray[2]);
/**
 * The forloop in typescript
 */
var myPerson = {
    first: "James",
    last: "Muruki"
};
for (var prop in myPerson) {
    console.log(prop);
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var num in numbers) {
    console.log(num);
}
