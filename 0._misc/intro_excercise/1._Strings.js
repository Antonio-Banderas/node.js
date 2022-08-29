// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const result = parseFloat(numberOne) + parseFloat(numberTwo)
console.log(result); // 3.4

// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherResult = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)
const anotherResultRounded = anotherResult.toFixed(2) 
console.log(anotherResultRounded); // 3.40

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const total = ((one + two + three)/3).toFixed(5)
console.log(total);


// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

const c = letters.charAt(2)
console.log(c);


// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

improvedFact = fact.replace("j","J")
console.log(improvedFact);

// --------------------------------------



