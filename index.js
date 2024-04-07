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
