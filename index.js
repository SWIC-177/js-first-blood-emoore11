// Example of using arrow functions

const add = (a, b) => a + b;

console.log(add(2, 3)); // Output: 5

// Example of using function as an argument

const multiply = (a, b) => a * b;

const calculate = (operation, a, b) => operation(a, b);

console.log(calculate(add, 2, 3)); // Output: 5
console.log(calculate(multiply, 2, 3)); // Output: 6

// Example of using a function to return another function

const createMultiplier = (factor) => (number) => number * factor;

const double = createMultiplier(2);
console.log(double(5)); // Output: 10

const triple = createMultiplier(3);
console.log(triple(5)); // Output: 15

function scoreIncrementor(incrementAmount, score) {
  return score + incrementAmount;
}

// Example usage for basketball
const basketballScore = 0;
const newBasketballScore = scoreIncrementor(1, basketballScore); // Increment by 1️⃣
console.log(newBasketballScore); // Output: 1️⃣

// Example usage for football
const footballScore = 0;
const newFootballScore = scoreIncrementor(6, footballScore); // Increment by 6️⃣
console.log(newFootballScore); // Output: 6️⃣
