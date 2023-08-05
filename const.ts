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

console.log(theschool)

// The arrow function

const ping = () => {
    setTimeout(() => {
        console.log('ping')
    }, 1000);
}

ping()

const pong = () => {
   setTimeout(()=>{console.log('Pong'),1100})
}

pong()

/**
 * Object destructuring in javascript
 */

const theperson = {
    first: 'Okello',
    second: 'Thomas',
    last: 'Olal'
}

const { first: firstname, second: secondname, last: lastname } = theperson

console.log(secondname)

console.log(theperson.second)

/**
 * the case of array destructuring
 */

const myArray = [1, 3, 4]

const [a, b, c] = myArray

console.log(c)

console.log(myArray[2])

/**
 * The forloop in typescript
 */

const myPerson = {
    first: "James",
    last: "Muruki"
}

for (let prop in myPerson) {
    console.log(prop)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let num in numbers) {
    console.log(num)
}

