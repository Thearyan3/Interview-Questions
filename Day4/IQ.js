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



// What is the use of setTimeout
// What are promises and why do we need them?
// What is the purpose of async/await keywords?
// What is callback hell
// What is promise?
// What are arrow functions?
// Give an example of async/await
// What is difference between null and undefined and where to use what?
// Write code to explain map and filter in arrays
// Given an array of 0's and 1's find out number of 0's
// Given an array find out total no. of odd and even nos.
// Given a string find out number of vowels 
// Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same