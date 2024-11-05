//Question No. 1 - What are objects in javascript?

// -->Objects are collection of properties. They are used to store keyed collections & complext entities.
// property => {key : value} pair.
// for ex : student{
// name : "aryan",
// age : 20,
// class : "2nd year"
// }
// Here, name, age and class are keys and aryan, 20 and 2nd year are values.
// the (name:aryan) pair is called the property and student is the object.


//Question No. 2 - What are functions?

// -->Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.


//Question No. 3 - What is an event loop and call stack.

// --> (i) CallStack - It is a data structure which keeps track of function calls in our program. Whenever we call a function for its execution, we are pushing it to the stack. It comes out of the stack when the execution is completed.
// (ii) Event Loop - It has pretty specific work. It has responsibility to see whether the call-stack is empty and does the task queue contains pending task to process. If the call-stack is empty, it will push the task to the call-stack from the queue and the task gets processed.


//Question No. 4 - What is the DOM?

// -->The DOM represents a document with a logical tree. It means whenever the HTML code is converted into the JavaScript, it is converted in the form of a logical tree. Logical tree is basically a hierarchical structure that represents the parent-child relation between the elements of HTML. 
// DOM allows us to change/Manipulate webpage content (HTML Elements).


//Question No. 5 - Difference between undefined vs not defined vs NaN

// -->(i). NaN in JS (Not a Number)
// --> The NaN global property is a value representing Not-a-Number.
// It means it represents those number which are mathematically invalid like (0/0).
// (ii). undefined in JS
// --> A variable that has not been assigned a value is of type undefined.
// (iii). not defined in JS
// --> An error which is thrown every time when a variable is not declared with in the code.


//Question No. 6 - What are arrow functions?

// -->An arrow function is a function with a shorter syntax. They are often assigned to variables, making them reusable. Arrow functions are also known as lambda functions in some other programming languages.
// The working of Arrow Functions are as below: 
// (i) Arrow funcitons without Parameters
// (ii) Arrow funcitons with Multiple Parameters
// (iii) Arrow funcitons with single Parameters
// (iv) Arrow funcitons with default Parameters


//Question No. 7 - What is the for-in loop in JavaScript? Give its syntax.

// -->for-in loop - In each iteration of the loop, a key is assigned to the key variable. The loop continues for all object properties. Once you get keys, you can easily find their corresponding values. 
// Syntax : for(let key in object){}


//Question No. 8 - Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript.

// -->In JavaScript, scope is the context in which variables are declared and can be accessed. The Three primary types of scope in JS are : 
// (i). Global Scope: The widest scope available, where variables can be accessed from anywhere in the code. 
// (ii). Local Scope: Variables are only accessible from within the block of code, function, or conditional statement in which they are defined.
// (iii). Block Scope: Variables declared in block scope are confined to that block. Block statements, such as if conditions or for loops, don't create a new scope. 
// --> Scope chain is a hierarchical structure that determines the order in which JavaScript looks for variables and functions. It means when a variable is accessed, JavaScript starts by searching for it in the current scope. If it's not found, JavaScript continues to search in the next outer scope, and so on, until it finds the variables or reaches the global scope.


//Question No. 9 - What is difference between null and undefined and where to use what?

// --> Undefined = A variable that has not been assigned a value is of type undefined. By Default, When javascript wants to say that i don't know, it is denoted by undefined. Undefined has not to assigned to any value. It is undefined by default only.
        // For Ex: let a;
        // now a is undefined by default.
//   null = The null value represents the intentional absence of any object value. It is a keyword in JavaScript.It has to be explicitly assigned.
    // for Ex: let a = null;
                // a holds the value of null

// Use of null = Whenever a we create a new program and we want to initialize a variable and assign some value to it but we don't know the exact value at that time so we use null in that case.
// for Ex: let year = null;
//  year = 2000;
// Use of undefined = It has not to be used anywhere. It is by default thing.


//Question No. 10 - Write code to explain map and filter in arrays.

// -->map() method - The map() method creates a new array with the results of calling a function for every array Element. 
// const arr = [1, 4, 9, 16];
// console.log(arr.map(x => x / 2));
//filter() method - The filter() method creates an array filled with all array elements that pass a test (provided as a function).
// const arr = ["Jarvis", "The", "Developer"];
// console.log(arr.filter(word => word.length > 4));


//Question No. 11 - Given an array of 0's and 1's find out number of 0's.

let array = [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0];
let Zero = 0;
let One = 0;
for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            Zero++;
        }else{
            One++;
        }
}
console.log("The total No. of zero is : ", Zero);
console.log("The total No. of One is : ", One);


//Question No. 12 - Given an array find out total no. of odd and even nos.

let arr = [1, 5, 6, 3, 8, 9, 7, 2];
let evenNo = 0;
let oddNo = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        evenNo++;
    }else{
        oddNo++;
    }
}
console.log("The total Number of even No. are : ", evenNo);
console.log("The total Number of odd No. are : ", oddNo);


//Question No. 13 - Given a string find out number of vowels.

let str = "Hello! , My Name Is Aryan Tanwar";
let vowels = "aeiouAEIOU";
let count = 0; 
for(let i = 0; i < str.length; i++){
  for(let j = 0; j < vowels.length; j++){
    if(str[i] === vowels[j])
   count++;
  }
}
console.log(count);