// SEARCHING INSIDE STRINGS PRACTICE in JAVASCRIPT


// Q1: Convert the string "JavaScript Programming" to all lowercase.
let str1 = "JavaScript Programming";
let lowerCaseStr = str1.toLowerCase();
console.log(lowerCaseStr);


// Q2: Convert the same string to all uppercase.
// let str1 = "JavaScript Programming"; (already declared above)
let upperCaseStr = str1.toUpperCase();
console.log(upperCaseStr);


// Q3: Trim all white spaces from both ends of the string "   Hello World   ".
let str2 = "   Hello World   ";
let trimmedStr = str2.trim();
console.log(trimmedStr);


// Q4: Remove only the leading spaces from "   Hello World   ".
// let str2 = "   Hello World   "; (already declared above)
let leadingTrimmedStr = str2.trimStart();
console.log(leadingTrimmedStr); 


// Q5: Remove only the trailing spaces from "   Hello World   ".
// let str2 = "   Hello World   "; (already declared above)
let trailingTrimmedStr = str2.trimEnd();
console.log(trailingTrimmedStr);


// Q6: Extract the word "JavaScript" from the string using slice() or substring().
let str3 = "JavaScript Programming";
let extractedWord = str3.slice(0, 10); // or str3.substring(0, 10);
console.log(extractedWord);


// Q7: Get only the word "Programming" from the string using negative index with slice().
// let str3 = "JavaScript Programming"; (already declared above)
let programmingWord = str3.slice(-11); // or str3.substring(11);
console.log(programmingWord);


// Q8: Split "JavaScript Programming" into an array of words.
let str4 = "JavaScript Programming";
let wordsArray = str4.split(" ");
console.log(wordsArray);


// Q9: Join that array into a single string separated by hyphens.
// let wordsArray = ["JavaScript", "Programming"]; // (already declared above)
let joinedString = wordsArray.join("-");
console.log(joinedString);


// Q10: Check if the string "The quick brown fox jumps over the lazy dog" includes the word "fox".
let str5 = "The quick brown fox jumps over the lazy dog";
let includesFox = str5.includes("fox");
console.log(includesFox);
