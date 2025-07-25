// Array Basics Exercises


// 1. Create an array of 5 programming languages and print the 3rd one.
let programmingLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
console.log(programmingLanguages[2]);


// 2. Create an array of numbers. Print the first and last number using array indexes.
let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);


// 3. Use the .length property to print how many fruits are in the array ["mango", "apple", "banana"].
let fruits = ["mango", "apple", "banana"];
console.log(fruits.length);


// 4. Use .at() to access the second last item from the array ["red", "blue", "green", "yellow"].
let colors = ["red", "blue", "green", "yellow"];
console.log(colors.at(-2));


// 5. Declare a mixed array containing a number, a string, a boolean, and null. Log the entire array.
let mixedArray = [42, "Hello", true, null];
console.log(mixedArray);


// 6. Access the value "JavaScript" from the following array: (let devStack = ["HTML", "CSS", "JavaScript", "React"];)
let devStack = ["HTML", "CSS", "JavaScript", "React"];
console.log(devStack[2]);


// 7. Create an empty array and push three values into it using .push().
let newArray = [];
newArray.push("Value 1");
newArray.push("Value 2");
newArray.push("Value 3");
console.log(newArray);

// 8. Remove the last element from an array using .pop() and print the updated array.
newArray.pop();
console.log(newArray);


// 9. Create an array of your 3 favorite sports. Replace the second sport with "Basketball".
let favoriteSports = ["Soccer", "Tennis", "Baseball"];
favoriteSports[1] = "Basketball";
console.log(favoriteSports);


// 10. Create an array of city names and log the length of the array and the last city using .at(-1).
let cities = ["New York", "Los Angeles", "Chicago"];
console.log(cities.length);
console.log(cities.at(-1));
