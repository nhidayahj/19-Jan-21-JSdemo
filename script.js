const prompt = require("prompt-sync")();
console.log("Hello World");

// when using "prompt()" in VScode, it will produce an error -- becasue VScode has no browser to display the prompt output
// must install using npm "npm install prompt-sync"

let name = prompt("Enter your name: ");
console.log("Hello " + name);

// Anything from a prompt function is a string
let year = prompt("Your birth year: ");
let currentYear = 2021;
let age = currentYear - parseInt(year);
console.log("Your age is " + age);
