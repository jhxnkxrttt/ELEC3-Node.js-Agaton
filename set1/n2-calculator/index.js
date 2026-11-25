//Jhon Kurt V. Agaton
//IV-BSIT B
//November 25, 2026
const path = require("path");

const {
    add,
    subtract,
    multiply,
    divide,
    average
} = require("./operations");

const formatResult = require("./formatter");

// Using a built-in module
console.log("Calculator:", path.basename(__filename));

const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

if (!operation || process.argv[3] === undefined || process.argv[4] === undefined) {
    console.log("Usage: node index.js <operation> <number1> <number2>");
    process.exit(1);
}

if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log("Error: Please enter valid numbers.");
    process.exit(1);
}

const operations = {
    add,
    subtract,
    multiply,
    divide,
    average
};

if (!operations[operation]) {
    console.log("Error: Unknown operation.");
    console.log("Available operations: add, subtract, multiply, divide, average");
    process.exit(1);
}

try {
    const result = operations[operation](num1, num2);

    console.log(formatResult(operation, num1, num2, result));
} catch (error) {
    console.log("Error:", error.message);
}
