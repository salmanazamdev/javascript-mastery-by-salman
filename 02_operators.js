// OPERATORS

//1: Billing Calculation (example: per item = 500, total items = 3, calculate total bill)
let costperitem = 500;
let quantity = 3;
let totalBill = costperitem * quantity;
console.log("Total Bill:", totalBill);


//2: Even or Odd Number Check
let number = 7;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
} // used === operator for strict equality check


//3: Math Puzzle with Multiple Operators
let x = 5;
let result = ((x * 4) + 10) / 3;
console.log("Result:", result); // Output: 10


//4: Compare two item prices
let itemA = 350;
let itemB = 420;

if (itemA < itemB) {
  console.log("A is cheaper");
} else if (itemA === itemB) {
  console.log("Same price");
} else {
  console.log("B is cheaper");
}


//5 Swap two numbers without temp variable
let a = 10;
let b = 20;

a = a + b; // 30
b = a - b; // 10
a = a - b; // 20

console.log("a:", a, "b:", b); // a: 20, b: 10


//6: Raise 2 to the power 5
let power = 2 ** 5;
console.log("2^5 =", power); // Output: 32


//7: Game Score Update using assignment operators
let score = 150;

score += 100;  // 250
console.log("After +100:", score); // += means add and assign

score -= 20;   // 230
console.log("After -20:", score); // -= means subtract and assign

score *= 2;    // 460
console.log("After *2:", score); // *= means multiply and assign

score /= 5;    // 92
console.log("After /5:", score); // /= means divide and assign


//8: Complex login rule with && and ! (user has to be 18 or older, has ID, and is not banned)
let age = 25;
let hasID = true;
let isBanned = false;

if (age >= 18 && hasID && !isBanned) {
  console.log("Entry allowed");
}