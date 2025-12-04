// // let var  const

// var a = 10;

// a = 20; // re assigned in var
// var a = 60 ; // re declared in var

// // not block scope

// {
//     var a = 30 ;
// }

// var a = 40 ;

// console.log(a);

// let a = 10;
// a = 20 ;

// let a = 30 ; // error re declared in let

// let a ;

// a = 50 ;

// let a = 60 ; // error re declared in let

//  block scope
// {
//     let a = 70 ;
//     console.log(a);
// }

// let a = 80 ;
// console.log(a);

// const a = 40;

// a = 50 ; // error re assigned in const
// const a = 60 ; // error re declared in const

//  const b ; // error must be initialized
// b = 70 ;

// const b = 80 ;

// console.log(b);

// {

//     console.log(b);

// }

// let a = 10 ;
// let b = 5 ;

// let c = a+b;

// console.log(c);

// // operators in javascript

// const pi = 3.14;
// const r = 5 ;
// const area = pi * r**2 ;

// console.log("Area of circle :" , area );

// let total = 10;
// total = total + 5 ;

// console.log(total);

// WHEN TO USE WHAT?
// ✔ Use let when:
// The value will change
// Counters (count++)
// Loops
// Updating totals
// Reassigning variables
// ✔ Use const when:
// The value should never change
// Configuration values
// Fixed formulas
// Constant limit values
// Arrays/objects whose reference shouldn’t change

// operators 
// logical 
// bitwise
// ternary
// typeof
// unary
// relational
// mathematical calculations

// or perator s
// // used for mathamatical calculations

// let a = 10;
// let b = 5;
// console.log("Mathematical Calculations :" , a + b );
// console.log("Mathematical Calculations :" , a - b );



            // logical operators
// used to combine conditional statements



let a = 3;
let b = 10;
console.log("Logical AND (a > 5 && b < 10) :" , (a > 5 && b < 10) );   // true && true = true




console.log("Logical OR (a > 15 || b < 10) :" , (a < 15 || b > 10) );   // false || true = true


console.log("Logical NOT !(a > 5) :" , !(a > 5) );   // !(false) = true


// bitwise operators
// used to perform bit-level operations


