//Question No. 1 - Difference between “ == “ and “ === “ operators.
// --> ("==") and ("===") both are comparison operators. They both are used to check the condition that the given values are equal or not but the only difference between them is that ("==") operator only checks if the value is equal whereas ("===") operator also checks the datatype of that particular value.  
// For Ex :
//(i). 
        let a = 10;
        if(a % 2 == 0){ //only checks the value              
             console.log("a is even"); 
        }else{
            console.log("a is odd");
        }
// (ii). 
        let c = 10;
        let b = "10";
         if(c === b){ //also checks the type of value
                       console.log("a & b are equal");
        }else{
                    console.log("a & b are not equal");
            }

//Question No. 2 -  What are the differences between var, let and const?
// --> Difference between var, let and const are as follows : 
// (i). var - var is a keyword in JS. It is also known as Variable Keyword. var has a function or global scope. In var, value can be re-assigned and re-declared. It is used whenever a local or global variable is required.
// for Ex :
                var var1 = 5;
                var1 = 10;// re-assignment
                var var1 = 50;// re-declaration
                console.log(a);
// (ii). let - let is a keyword in JS. It is also known as literal Keyword. let is a block scope variable.In let, value cannot be redeclared but can be reassgined. It is used mostly for temporary variables that you want to perish in a loop or function.
// for Ex : 
                let num1 = 25;
                num1 = 20;//value can be reassigned
                // let num1 = 33; //value cannot be redeclared
                console.log(num1);
// (iii). const - const is keyword in JS. It is also known as constant keyword. const is a block-scoped variable. In const, value cannot be re-assigned and re-declared. It is used for some specific situations.
// for Ex : 
                const num2 = 33;
                // const num2 = 225; value cannot be redeclared 
                // num2 = 245; value cannot be re-assinged
                console.log(num2);

//Question No. 3 -  What is execution context?
//Question No. 4 -  What is creation phase and execution phase?
// --> Execution phase: In this stage the code will be executed means all the functions which are written will be executed.
//Question No. 5 -  What is hoisting?
// --> Hoisting is a default behaviour of javascript where all the variable and function declarations are moved to top.
// (i). It is a concept which says that you should always declare and initialise all the variable in JS before using them.
// (ii). If we will not initiate the variables (means giving or assigning the value to a variable) before using it, then it will throw errors. So to avoid such errors, we should follow the concept of Hoisting in JS.

//Question No. 6 -  Difference between undefined vs not defined vs NaN.
// (i). NaN in JS (Not a Number)
// --> The NaN global property is a value representing Not-a-Number.
// It means it represents those number which are mathematically invalid like (0/0).
// (ii). undefined in JS
// --> A variable that has not been assigned a value is of type undefined.
// (iii). not defined in JS
// --> An error which is thrown every time when a variable is not declared with in the code.

//Question No. 7 -  How many operators do we have in JS ?
// --> In JS, We have six types of operators which are as follows :
// (i). Arithmetic Operators - (%, -, +, *, /)
             let y = 5;
             let x =  10;
             let res = y % x;
             console.log(res);
// (ii). Comparison Operators - (==, ===, !=, !==, <, >, <=, >=)
            let e = "10";
            let d = 10;
            let resu = e <= d;
            console.log(resu);
// (iii). Increment and Decrement Operators(a++, ++a, a--, --a)
// (a). Postfix Increment Operator 
            let num3 = 20;
            console.log(num3++, num3, num3++);

// (b). Prefix Increment Operator
            let num4 = 20;
            console.log(++num4, num4);

// (c). Postfix Decrement Operator
            let num5 = 20;
            console.log(num5--, num5);

// (d). Prefix Decrement Operator 
            let num6 = 20;
            console.log(--num6, num6--, num6, num6--, --num6, num6, num6--);
// (iv). Logical Operators(&&, ||, !)
             var o = (3 > 2 && 1 < 2);
             var p = (3 > 2 || 5 < 2);
             console.log(o, p);
             console.log(!false);
// (v). Ternary Operators (condition ? Val1 : Val2)
        console.log((5 === 9) ? g : f);
// (vi). Comma Operator (,)


//Question No. 8 -  Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript.



