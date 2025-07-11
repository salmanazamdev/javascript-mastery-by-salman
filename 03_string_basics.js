// STRING BASICS and PROPERTIES in JAVASCRIPT


// Q1: Create a string variable with your full name and print its length.
let fullName = "Salman The Coder";
console.log("Length of full name:", fullName.length); 


// Q2: Convert the string "i love javascript" to uppercase.
let str = "i love javascript";
console.log("Uppercase:", str.toUpperCase());


// Q3: You have a string " Salam " Remove the spaces from both ends using trim().
let strWithSpaces = " Salam "; // one space on the left and one on the right
console.log("Trimmed:", strWithSpaces.trim()); 


// Q4: Extract the word "code" from "i love code" using slice().
let sentence = "i love code";
let extractedWord = sentence.slice(7, 11); // Here 7 means the starting index and 11 means the ending index (not inclusive)
console.log("Extracted word:", extractedWord); 


// Q5: Check if the word "js" exists in the string "this is js class" using includes().
let stringToCheck = "this is js class";
console.log("Does 'js' exist in the string?", stringToCheck.includes("js")); // it will give either true or alse false



// Q6: Replace "Hello" with "Hi" in "Hello World".
let greeting = "Hello World";
let updatedGreeting = greeting.replace("Hello", "Hi");
console.log("Updated Greeting:", updatedGreeting);



// Q7: Get the first character from "React" using charAt().
let framework = "React";
console.log("First character:", framework.charAt(0)); // charAt function works in a way that it takes the index of the character you want to get, here 0 means the first character



// Q8: Find the position of "a" in the string "banana" using indexOf().
let fruit = "banana";
console.log("Position of 'a':", fruit.indexOf("a")); // there are 3 a's in banana, but indexOf will return the position of the first occurrence, which is 1


// Q9: Concatenate "Hello" and "World" using + operator.
let part1 = "Hello";
let part2 = "World";
let concatenated = part1 + " " + part2;
console.log("Concatenated String:", concatenated);


// Q10: Use template literals to print: (My name is Salman and I love JavaScript) 
let name = "Salu Bhai"
let loveForJS = "JavaScript";
console.log(`My name is ${name} and I love ${loveForJS}`); // this is a template literal, it allows you to embed expressions inside string literals, using backticks (`) instead of quotes
// Template literals are enclosed by backticks (`) instead of single or double quotes, and they can span multiple lines without the need for concatenation.