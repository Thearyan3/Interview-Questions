//Question No. 1 - What are objects in javascript?
// -->In JavaScript, objects are variables that store collections of key-value pairs, which can include properties and methods. They are a core data structure that allows developers to group related data together and split code into logical pieces. 
// Some characteristics of JavaScript objects are as follows :
// (i). Properties :- Named values that describe an object's characteristics. For example, a cup's properties might include its color, design, weight, and material. 
// (ii). Methods :- Functions or actions that an object can perform. For example, a fan's methods might include cooling rooms and controlling humidity. 
// (iii). Data types :- Objects can contain all other JavaScript data types, such as strings, numbers, and Booleans. 



// Question No. 2 - What are function constructors?
// -->In JavaScript, a function constructor is a special function that creates and initializes an object when it's created. A constructor function sets the initial values or properties of an object. When the new keyword is used to create an object, the constructor function is called. The constructor function creates a new object, assigns values to its properties, and returns the new object. 
// A constructor function is defined like any other function, but it's usually named with an uppercase letter to distinguish it from regular functions. Inside the constructor function, the this keyword is used to refer to the object being created. Values are assigned to the object's properties using dot notation or bracket notation. JavaScript has built-in constructors for all native objects, such as new Object() and new Array(). 



// Question No. 3 - Give an example of inheritance using function constructor.
class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${name} makes a noise`);
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name)
        this.breed;
    }
    speak(){
        console.log(`${this.name} barks`)
    }
}

const dog = new Dog('Labrador', 'Pitbull');
dog.speak();



// Question No. 4 - What is the use of setTimeout?
// -->JavaScript's setTimeout function is one of the most useful functions for working with asynchronicity in your code. It allows you to run a function after a certain amount of time has passed. This can be really useful for making sure that certain code doesn't run until after another piece of code has finished running.
//For Ex : We can build a clock using setTimeout in JavaScript: 
function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var time = h + ':' + m + ':' + s + '';
    console.log(time);
    setTimeout(showTime, 1000);
}showTime();



// Question No. 5 - What are promises and why do we need them?
//-->Promises provide a robust way to wrap the result of asynchronous work, overcoming the problem of deeply nested callbacks. The Promise object takes a callback function as a parameter, which, in turn, takes two parameters, resolve and reject. The promise is either fulfilled or rejected. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.



// Question No. 6 - What is the purpose of async/await keywords?
//-->The async/await keywords are used to simplify the syntax for consuming promise-based APIs. They make code more readable and easier to handle than promises. The async keyword indicates that a function returns a promise, and the await keyword is used before a call to a function that returns a promise. The await keyword ensures that the function waits for the promise to resolve. 



// Question No. 7 - What is callback hell?
//-->
// What is promise?
// What are arrow functions?
// Give an example of async/await
// What is difference between null and undefined and where to use what?
// Write code to explain map and filter in arrays
// Given an array of 0's and 1's find out number of 0's
// Given an array find out total no. of odd and even nos.
// Given a string find out number of vowels 
// Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same