// STRING CONCATENATION PRACTICE in JAVASCRIPT


// Q1: Declare firstName = "John" and lastName = "Doe". Concatenate them using the + operator to get "John Doe".
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);


// Q2: Now use template literals to combine firstName and lastName with a space in between.
// let firstName = "John";
// let lastName = "Doe"; (already declared above)
let fullNameTemplate = `${firstName} ${lastName}`;
console.log(fullNameTemplate);


// Q3: Create a greeting like "Hello, John Doe! Welcome." using template literals.
// let firstName = "John";
// let lastName = "Doe"; (already declared above)
let greeting = `Hello, ${firstName} ${lastName}! Welcome.`;
console.log(greeting);


// Q4: Write a sentence that includes a variable `language = "JavaScript"` in: "I'm learning JavaScript." (use backticks)
let language = "JavaScript";
let learningSentence = `I'm learning ${language}.`;
console.log(learningSentence);


// Q5: Create a string that says:
// My name is Salman.
// I love coding.


// Q6: Use + operator to join "React", "Native" and "is awesome" into one sentence.


// Q7: Create a sentence using template literals with a number variable: `You have 5 new messages.`


// Q8: Make a sentence with a boolean value like: `Dark mode is true`


// Q9: Combine a string and a number using +, like "Total score: 95"


// Q10: Use backticks to create a multi-line string that looks like:
// Line 1
// Line 2
// Line 3
