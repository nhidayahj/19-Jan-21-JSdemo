const prompt = require("prompt-sync")();
console.log("Hello World");

// when using "prompt()" in VScode, it will produce an error -- becasue VScode has no browser to display the prompt output
// must install using npm "npm install prompt-sync"

// let name = prompt("Enter your name: ");
// console.log("Hello " + name);

// // Anything from a prompt function is a string
// let year = prompt("Your birth year: ");
// let currentYear = 2021;
// let age = currentYear - parseInt(year);
// console.log("Your age is " + age);

//Calculate BMI
let weight = prompt("What is your weight in kg? ");
let height = prompt("What is your height in m? ");
let bmi = parseFloat(weight) / parseFloat(height) ** 2;
console.log("Your BMI is: " + bmi);
