// Array Manipulation Tasks

// 1. Create an array of colors and add "purple" to the end using push().
let colors = ["red", "blue", "green"];
colors.push("purple");
console.log(colors);

// 2. Create an array of numbers [10, 20, 30]. Add 5 at the beginning using unshift().
let numbers = [10, 20, 30];
numbers.unshift(5);
console.log(numbers);

// 3. Remove the last element from an array using pop() and log the updated array.
numbers.pop();
console.log(numbers);

// 4. Remove the first element from ["a", "b", "c", "d"] using shift() and print it.
let letters = ["a", "b", "c", "d"];
let shiftedLetter = letters.shift();
console.log(shiftedLetter);

// 5. Use splice() to remove the second item from ["car", "bus", "train", "bike"].
let vehicles = ["car", "bus", "train", "bike"];
vehicles.splice(1, 1);
console.log(vehicles);

// 6. Use splice() to insert "pen" and "pencil" at index 1 in an array ["book", "eraser", "marker"].
let stationery = ["book", "eraser", "marker"];
stationery.splice(1, 0, "pen", "pencil");
console.log(stationery);

// 7. Create an empty array and use push() to add 3 elements of your choice.
let emptyArray = [];
emptyArray.push("Element 1");
emptyArray.push("Element 2");
emptyArray.push("Element 3");
console.log(emptyArray);

// 8. Create an array of 5 fruit names. Remove 2 from the middle using splice().
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.splice(2, 2);
console.log(fruits);

// 9. Create an array and use pop() twice to remove the last two elements.
let numbers9 = [1, 2, 3, 4, 5];
numbers9.pop();
numbers9.pop();
console.log(numbers9);

// 10. Add "first" at the beginning and "last" at the end of ["middle"] using unshift() and push().
let middleArray = ["middle"];
middleArray.unshift("first");
middleArray.push("last");
console.log(middleArray);
