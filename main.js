//==========Exercise #1 ===========//
/*
Write a function that parses through the below object 
and displays all of their favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function displayFavoriteFoods(person) {
    for (const key in person) {
        if (Array.isArray(person[key])) {
            console.log(`${key}: ${person[key].join(", ")}`);
        } else if (typeof person[key] === 'object') {
            console.log(`${key}:`);
            for (const subKey in person[key]) {
                console.log(`  ${subKey}: ${person[key][subKey]}`);
            }
        } else {
            console.log(`${key}: ${person[key]}`);
        }
    }
}

// Call the function with the provided object
displayFavoriteFoods(person3);



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Use an arrow to create the printInfo method
    printInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    addAge(years) {
        this.age += years;
    }
};

const person1 = new Person('Zak', 25);
const person2 = new Person('BabyZak', 1);

person1.printInfo();
person2.printInfo();

person2.addAge(3);

person1.printInfo();
person2.printInfo();


// =============Exercise #3 ============//
/*
Create a Promised based function that will check a string to determine if it's length is greater than 10.
If the length is greater than ten console log "Big word". 
If the length of the string is less than 10 console log "Small Number"
*/

const checkLength = (inputStr) => {
    return new Promise((resolve, reject) => {
        if (inputStr.length > 10) {
            resolve('Big Word');
        } else {
            reject('Small Number');
        };
    });
};

let input1 = 'BigWordddddddddddddddd'
let input2 = 'Small'

checkLength(input1)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })


checkLength(input2)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })


// -------------------------- CODEWARS PROBLEMS --------------------------------- //

/* 1.)
Write a function range(min, max) that takes in two numbers. 
The function should return an array containing all numbers from min to max inclusive. 
*/
function range(min,max){
    let array = []
    for(let i = min; i <= max; i++) {
      array.push(i)
    }
    return array;
  }
  
console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]



/* 2.)
Write a function that accepts a number as an arg. The function should return an array containing 
all positive numbers less than or equal to max that are divisible by either 4 or 6, but not both.
*/

function pitPat(max){
    let array = []
    for(let i = 1; i <= max; i++){
      if((i % 4 === 0 || i % 6 === 0) && i % 12 !== 0){
        array.push(i)
      }
    }
    return array
  }
  
console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]







