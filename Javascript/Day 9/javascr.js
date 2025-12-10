// 5.ArraysandArrayMethods
// 5.1CreatingandAccessingArrays
// 5.2CommonArrayMethods(push,pop,shift,unshift)
// 5.3AdvancedArrayMethods(map,filter,reduce,forEach)
// 5.4MultidimensionalArrays
// 6.DOMManipulation
// 6.1WhatistheDOM?
// 6.2SelectingElements(getElementById,querySelector,etc.)
// 6.3ChangingElementContentandStyles
// 6.4AddingandRemovingElements(appendChild,removeChild)
// 6.5EventHandling(addEventListener,InlineEvents)

const fruits = ["apple ", "bananna", "kiwi", "orange", "avalcado"];
const numbers = [10, 20, 30];

console.log(fruits[0]);

console.log(fruits[2]);

fruits[1] = "greenapple";

console.log(fruits);

console.log(fruits[1]);

fruits.push("mangooo");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("pineapple");

console.log(fruits);

fruits.forEach((item) => {
  console.log(item);
});

const price = [100, 200, 300];
const gstPrices = price.map((p) => p + p * 0.18);

console.log(gstPrices);

const nums = [1, 2, 3, 4, 5];
const even = nums.filter((n) => n % 2 === 0);

console.log(even);

const sum = nums.reduce((total, current) => total + current, 5);

console.log(sum);


// multidimentional array 


const matrix = [
    [1,2,3,4],
[33,44,55],
[666,[777,11111,222222,3333,404],888] //2
]



console.log(matrix[2][1][4]);


