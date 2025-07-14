// STRING METHODS PRACTICE in JAVASCRIPT


// Q1: Convert the string "HELLO WORLD" to lowercase.
let upperCaseString = "HELLO WORLD";
let lowerCaseString = upperCaseString.toLowerCase();
console.log("Lowercase:", lowerCaseString);


// Q2: Extract the last 3 characters from the string "JavaScript" using slice().
let isString = 'Javascript';
let lastThreeChar = isString.slice(-3); // slice works in a way that it takes the last 3 characters from the string
// Alternatively, you can use substring(isString.length - 3) to achieve the same result
console.log("Last three characters:", lastThreeChar);


// Q3: Count how many characters (including spaces) are in "Learning JS is fun".
let learnJS = "Learning JS is fun"
let countChar = learnJS.length;
console.log("Character count:", countChar);


// Q4: Use startsWith() to check if the string "Frontend Developer" starts with "Front".
let frntDev = "Frontend Developer";
let checkStart = frntDev.startsWith("Front");
console.log(checkStart);


// Q5: Use endsWith() to check if the string "index.html" ends with ".js".
let demString = "index.html";
let checkLast = demString.endsWith(".js");
console.log(checkLast);


// Q6: Repeat the string "Ha!" 3 times using repeat().
let react = "Ha!";
let repeatReact = react.repeat(3);
console.log(repeatReact);


// Q7: Use split() to convert "apple,banana,grapes" into an array.
let fruits = "apple,banana,grapes";
let fruitArray = fruits.split(","); //split works in a way that it takes the string and splits it into an array based on the separator you provide, here we are using comma as a separator
console.log(fruitArray);


// Q8: Use substring() to extract "Script" from "JavaScript".
let jsString = "JavaScript";
let extractedString = jsString.substring(4); //substring works in a way that it takes the starting index and extracts the string from that index to the end of the string, here we are starting from index 4 which is the letter 'S' in "JavaScript"
console.log("Extracted Script:", extractedString);


// Q9: Use replaceAll() to replace all "!" with "." in the string "Wow! Amazing! Great!".
let exclString = "Wow! Great! Salman is Amazing!";
let dotString = exclString.replaceAll("!" , ".");
console.log("New String:", dotString);

// Q10: Check if the string "  " (two spaces) is empty after using trim().
let spaceString = "  "; // this string has two spaces
let trimmedString = spaceString.trim();
console.log("Is trimmed string empty?", trimmedString === "");
