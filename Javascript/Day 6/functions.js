// function

//is a block of code designed to perform a particular task.
// A function is executed when something invokes it (calls it).


// a function runs only when you call it 

// it receives inputs (parameters) and returns a single output (return value)


// key points 
// 1.reusable code
// 2. reduce redundancy (repeating code )
// 3. makes logic more organized and manageable
// 4. helps in modular programming
// 5. easier to debug and maintain
// 6. improves readability
// 7. allows for abstraction (hiding complex logic behind simple interfaces)
// 8. enables higher-order functions (functions that operate on other functions)
// 9. supports recursion (a function calling itself)
// 10. facilitates event-driven programming (functions as event handlers)
// 11. promotes code organization (grouping related functionality together)
// 12. enhances collaboration (multiple developers can work on different functions simultaneously)
// 13. allows for parameterization (customizing function behavior with arguments)
// 14. supports functional programming paradigms (using functions as first-class citizens)
// 15. enables code reuse across different projects or modules
// 16. improves performance (by avoiding code duplication and optimizing function calls)
// 17. aids in testing (isolating functionality for unit tests)
// 18. simplifies complex operations (breaking down tasks into smaller functions)
// 19. encourages best practices (promoting modular and maintainable code)
// 20. enhances scalability (easily adding new features by creating new functions)
// 21. allows for default parameters (setting default values for function arguments)
// 22. supports variadic functions (functions that accept a variable number of arguments)
// 23. enables closures (functions that capture variables from their surrounding scope)
// 24. facilitates memoization (caching function results for improved performance)
// 25. promotes code consistency (using standardized function patterns across a codebase)
// 26. aids in debugging (isolating issues within specific functions)
// 27. allows for function composition (combining multiple functions to create new functionality)
// 28. supports asynchronous programming (using callbacks, promises, and async/await)
// 29. enhances code organization (grouping related functions into modules or classes)
// 30. improves developer productivity (reducing repetitive coding tasks)
// 31. allows for event handling (defining functions to respond to user interactions)
// 32. supports functional programming techniques (using functions as first-class citizens)
// 33. enables code refactoring (easily modifying and improving existing functions)
// 34. promotes code readability (using descriptive function names and clear logic)
// 35. facilitates code sharing (distributing functions as libraries or packages)
// 36. allows for function overloading (defining multiple functions with the same name but different parameters)
// 37. supports higher-order functions (functions that take other functions as arguments or return them)
// 38. enhances code maintainability (easily updating and modifying functions without affecting other parts of the code)
// 39. promotes code modularity (breaking down complex systems into smaller, manageable functions)
// 40. improves code organization (grouping related functions together for better structure)
// 41. allows for function chaining (calling multiple functions in a single line of code)
// 42. supports functional programming concepts (using functions as first-class citizens)




// function declaration






// syntax

// function functionName(parameters){
//     // code to be executed
// }



// function greet(name) {
//     console.log("Hello, " + name + "!");
// }

// greet("Alice"); // Output: Hello, Alice!





// greet("Bob"); 

// function greet(name) {
//     console.log("Hello, " + name + "!");
// }


// const add =  function(a, b) {
//     return a + b;
// }



// // console.log(typeof add);
//  const result = add(5, 3);

//  console.log(result);
 


// const add =  function(a, b) {
//     return a + b;
// }

// const mulply = (a, b) => a*b;




// function greet (name = "guest") {
//     console.log("hi " + name);
    
// }


// greet();
// greet();
// greet();
// greet("arun");



// function square(num) {
//     console.log(num * num);

// }


// square(2);


// global scope  - accessible from anywhere in the code
// local scope  - accessible only within a specific function
// block scope  - accessible only within a specific block (e.g., inside curly braces)  




// let x = 10 ;
// function test(){
//     let y = 5
//     console.log(x+y);
// }

// test()




// const globalVar = "I am a global variable";
// var oldScopeVar = "I am a global scope variable (using var)";


// function showGlobalScope(){
//     console.log(globalVar); // Accessible
//     console.log(oldScopeVar); // Accessible
// }

// showGlobalScope();

// if(true){
//     console.log(globalVar);
//     console.log(oldScopeVar);
    
// }



// local scope 



// function showLocalScope() {
//     const localVar = "I am a local variable";
//     var oldLocalVar = "I am a local scope variable (using var)";


//     console.log(localVar);
//     console.log(oldLocalVar);
// }

   

// showLocalScope()

//  console.log(localVar);
//     console.log(oldLocalVar);


// if(true){
//     const blockVar = "I am a block-scoped variable";
//     let blockVar1 = "I am a block scope variable (using let)";
//     var blockVar2 = "i am a function / global scoped (var ) not block-scope  variable";
// }

// // console.log(blockVar);
// // console.log(blockVar1);



//  console.log(blockVar2);





// Highlight()

// function Highlight() {
//     console.log("This is a highlight function!");
// }




// const sayhello = function (){
//     console.log("lorem5")

    
// }


// sayhello()




// function callme(fn){
//     fn()
// }

// callme(()=>console.log("callback running "))





// function greet(name , callback){
//     console.log("hello ," + name );
//     callback()
    
// }

// function sayGoodbye(){
//     console.log("ggoodbye");
// }

// greet("arun", sayGoodbye)






// (function (){
//     let count = 0 ;
//     console.log(count);
    
// })();



// console.log(count);

// let sum = 1 ;


// function add (){
//     sum = sum + 10 ;
//     console.log(sum);
//     }


//     add()


// const counter = (function () {
//     let value = 0;          // stores the running total
//     let updatedValue = 0;   // stores last increment result (optional)

//     return {
//         increment() {
//             updatedValue = value + 1; // calculate new value
//             value = updatedValue;     // update main value
//             return value;             // return the new value
//         }
//     };
// })();



// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());







// const counter = (function (){
//     let value = 0 ;
//     return{
//         increment(){
//             value = value + 1 ;
//             return value ;
//         }
//     }
// })();




