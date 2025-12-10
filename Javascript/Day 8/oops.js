// core concepts of OOPs in JavaScript

//concepts                // meaning

//class            // blueprint for creating objects
//object           // instance of a class
// constructor     // special method to initialize objects
// method          // function defined inside a class
// inheritance     // mechanism to create a new class from an existing class
// prototype       // object from which other objects inherit properties

// Example of OOPs in JavaScript
// Creating a class

// class Person {
//     constructor(name , age , country) {
//         this.name = name;
//         this.age = age;
//         this.country = country || "USA";

//     }
//   greet() {
//     console.log(`hello , i am ${this.name} and i am ${this.age} years old from ${this.country}`);
// }
// }

// const p1 = new Person("arun" , 23 , "India");
// const p2 = new Person("bharath" , 24, );
// p1.greet();
// p2.greet();

// class car {
//     constructor( model , year, color) {
//         this.model = model;
//         this.year = year;
//         this.color = color || "black";
//     }
//     start(){
//         console.log(`the car model ${this.model} from year ${this.year} is starting`);
//     }
//     off(){
//         console.log(`the car model ${this.model} from year ${this.color} is stopping`);
//     }
// }

// const c1 = new car("BMW" , 2020, "red");
// c1.start();
// c1.off();

// array.forEach();

// prototype inheritance

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks`);
  }
}

// const d1 = new Dog("Buddy", "Dog");
// d1.speak();
// d1.bark();








// class car {
//     constructor( model , year, color) {
//         this.model = model;
//         this.year = year;
//         this.color = color || "black";

        
//     }
//     start(){
//         console.log(`the car model ${this.model} from year ${this.year} is starting`);
//     }
// }


const Product = {
    name : "Laptop",
    price : 50000,
    
    showDetails () {
         console.log(this.name , this.price);
    }
}

Product.price = 45000;

console.log( Product.name , Product.price);;


Product.showDetails();


const { name , price , brand = "jio" } = Product;



console.log(name , price , brand);




class student {
    constructor (name , roll){
        this.name = name;
        this.roll = roll;
    }
}


const s1 = new student("arun" , 101);
const s2 = new student("bharath" , 102);
const s3 = new student("kumari" , 103);


console.log(s1.name , s1.roll);




function Vehicle(type){
    this.type = type;
}

Vehicle.prototype.drive = function(){
    console.log(this.type + "  is driving");

}


const  bike = new Vehicle("bike");
bike.drive();
const van = new Vehicle("van");
van.drive();
