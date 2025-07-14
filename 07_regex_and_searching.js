// ADVANCED STRING MANIPULATION – Using Regular Expressions


// Q1: Find the index of the word "quick" in the string "The quick brown fox jumps over the lazy dog".
let str1 = "The quick brown fox jumps over the lazy dog";
let quickIndex = str1.indexOf("quick");
console.log(quickIndex);


// Q2: Find the last index of the word "the" (case sensitive) in the same string.
// let str1 = "The quick brown fox jumps over the lazy dog"; (already declared above)
let lastTheIndex = str1.lastIndexOf("the");
console.log(lastTheIndex);


// Q3: Check if the string includes the word "fox".
// let str1 = "The quick brown fox jumps over the lazy dog"; (already declared above)
let includesFox = str1.includes("fox");
console.log(includesFox);


// Q4: Check if the string starts with the word "The".
// let str1 = "The quick brown fox jumps over the lazy dog"; (already declared above)
let startsWithThe = str1.startsWith("The");
console.log(startsWithThe);


// Q5: Check if the string ends with the word "dog".
// let str1 = "The quick brown fox jumps over the lazy dog"; (already declared above)
let endsWithDog = str1.endsWith("dog");
console.log(endsWithDog);


// Q6: Use search() with a regex to find the position of "fox", case-insensitive.
let foxRegex = /fox/i;
let foxPosition = str1.search(foxRegex);
console.log(foxPosition);


// Q7: Extract the email from: "Contact: john@example.com or call 123-456-7890" using regex.


// Q8: Extract the phone number (123-456-7890) from the same string using regex.


// Q9: Replace all numbers in the string with "XXX" using regex.


// Q10: Split the string "The quick brown fox" by any amount of whitespace using regex.
