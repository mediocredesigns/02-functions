/**
 * Task 1: Defining a Function
 */

// Define a function named 'greet' that takes one argument 'name'.
// The function should console.log a greeting string: "Hello, [name]!"

// Define a function that squares a given number
// Bind the function to a const variable named square

// Define a binding named cubed whose value is a function with one parameter named num.
// The function should return the value of num cubed.
// The function should be defined using ES6 fat arrow syntax

function greet(name) {
  console.log(`Hello, ${name}!`);
}

const square = function (num) {
  return num * num;
};

const cubed = (num) => num * num * num;

/**
 * Task 2: Bindings and Scopes
 */

let a = 1;
function scopedFunction() {
  let b = 2;
  var c = 3;
  // modify the statement below to the value that scopedFunction returns true
  return a + b + c === 6;
}
const result = scopedFunction();

let d = 4;

if (a) d = 5;
// check that 'a' exists in the global scope, if it does, set d equal to 5

/**
 * Task 3: Bindings and Scopes (same variable name)
 */

// Define a function named halve that takes one parameter named num.
// The function should return num halved.

function halve(num) {
  return num / 2;
}

// Declare a variable named num in global scope and assign it the value 100.

let num = 100;

// create a variable named halfOfFifty and set it to the return value of halve(50)

let halfOfFifty = halve(50);

// create a variable named halfOfNum and set it to the return value of halve(num)

let halfOfNum = halve(num);

/**
 * Task 4: Complete the breadRecipe function
 * Objective: Understand nested functions and scopes
 */

// Create a function named breadRecipe that takes one parameter named numLoaves
const breadRecipe = function (numLoaves) {
  const addIngredient = (amount, unit, ingredient) => {
    amount *= numLoaves;
    if (amount > 1) unit = unit + "s";

    return `${amount} ${unit} ${ingredient}`; // console.log(addIngredient(5, "cup", "flour"));
  };
  console.log(addIngredient(2, "cup", "flour"));
  console.log(addIngredient(2, "cup", "water"));
  console.log(addIngredient(1, "teaspoon", "salt"));
  console.log(addIngredient(0.5, "teaspoon", "yeast"));
  // The function should take three parameters: amount, unit, ingredient
  // Calculate total required ingredient amount based on the number of loaves
  // The function should log the ingredient amount and name
  // The function should modify the unit to plural if ingredientAmount is greater than 1
  // example: 1 cup flour
  // example: 2 cups water
  // Add ingredients using the addIngredient function
  // the recipe for one loaf is: 2 cups flour,  2 cups water, 1 teaspoon salt, 0.5 teaspoon yeast
  // example. addIngredient(2, "cup", "flour");
};

breadRecipe(2);

/**
 * Task 5: Optional Parameters
 *
 */

// create a function named minus

const minus = (num1, num2 = 0) => {
  return num2 - num1;
};

// the function should take two parameters: num1 and num2
// the function should return num2 - num1
// if num2 is not defined, set the default value to 0
// example: minus(2, 5) should return 3
// example: minus(5) should return -5

/**
 * Task 6: Rest Parameters and Spread Operator
 * Objective: Understand the rest parameter syntax
 */

// create a function named sumRest
// the function should take a rest parameter named nums
// the function should return the sum of all numbers passed in
// call the function with 1, 2, 3, 4, 5
const sumRest = function (...nums) {
  let sum = 0;
  for (let num of nums) sum += num;
  return sum;
};

console.log(sumRest(1, 2, 3, 4, 5));

// create a function named sumSpread
// the function should take one parameter name nums that is an array
// Use the spread operator to calculate the sum of all numbers in the array
// It should use the sumRest function defined above
const sumSpread = function (nums) {
  return sumRest(...nums);
};

let numsArray = [1, 2, 3];

/**
 * Task 7: Closure (idGenerator)
 *
 * Objective: Understand closure
 */

// create a function named createIdGenerator
function createIdGenerator() {
  // create a variable named id and set it to 0

  let id = 0;

  return function () {
    id++;
    return id;
  };
  // return a function that increments id and returns the new value
}

// create a variable named nextId and set it to the return value of createIdGenerator
let nextId = createIdGenerator();
// create a variable named id1 and set it to the return value of nextId
let id1 = nextId();

// create a variable named id2 and set it to the return value of nextId
let id2 = nextId();

// create a variable named id3 and set it to the return value of nextId
let id3 = nextId();

/**
 * Task 8: Closure (createGreeter)
 *
 * Objective: Understand closure
 */

// create a function named createGreeter
function createGreeter(name) {
  return function () {
    console.log("Hello, " + name + "!");
  };
  // return a function that logs "Hello, [name]!" to the console
}
const greetJohn = createGreeter("John");
const greetJane = createGreeter("Jane");
// create a variable named greetJohn and set it to the return value of createGreeter with the name "John"

// create a variable named greetJane and set it to the return value of createGreeter with the name "Jane"

// call greetJohn
greetJohn();
greetJane();
// call greetJane

/**
 * Task 9: Closure (countDown)
 *
 * Objective: Understand closure
 */

// create a function named createCountdown
// the function should take one parameter named start
// createCountdown return a function that returns the value of start and decrements start by 1
function createCountdown(start) {
  return function () {
    if (start > 0) {
      return start--;
    } else {
      return 0;
    }
  };
}

/**
 * Task 10: Recursion
 * Objective: Understand recursion
 *
 */

// fix the function below to calculate exponents using recursion
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
