// Unicode and Special Characters in JavaScript


// 1. Print 5 emojis in a string and show their `.length` and `.codePointAt(0)`
const emojis = "💖😊🔥✨🌈";
console.log(emojis.length);
for (let i = 0; i < emojis.length; i++) {
    console.log(emojis.codePointAt(i).toString(16));
}


// 2. Convert "Hello" into Unicode escape sequences (\u0048...) and log it
const hello = "Hello";
const unicodeHello = Array.from(hello).map(char => `\\u${char.codePointAt(0).toString(16).padStart(4, '0')}`).join('');
console.log(unicodeHello);


// 3. Print a multi-line string using \n and include a tab (\t) and carriage return (\r)
const multiLineString = "Line 1\nLine 2\twith tab\rLine 3";
console.log(multiLineString);


// 4. Write a sentence that includes ©, ®, ™ and then remove them using .replace()
const sentence = "This is a test © 2023, with some ® and ™ symbols.";
const cleaned = sentence.replace(/©|®|™/g, '');
console.log(cleaned);


// 5. Normalize "café" and check if it matches "café" using .normalize("NFC")
const cafe = "café";
const cafeWithAccent = "café"; // 'e' with combining acute accent
const normalizedCafe = cafe.normalize("NFC");
console.log(normalizedCafe === cafeWithAccent); // true


// 6. Create an Urdu string, log the original text, and check its length
const urduString = "سلام";
console.log(urduString);
console.log(urduString.length);


// 7. Create a string with newline, tab, and emoji — explain output in comments
const mixedString = "Line 1\nLine 2\twith tab💖";
console.log(mixedString);

// Explanation:
// The output will show the text with a newline between "Line 1" and "Line 2",
// a tab space before "with tab", and the emoji 💖 at the end of the string.


// 8. Use `String.fromCodePoint()` to create a custom emoji string (codepoint-based)



// 9. Get the last character’s code point from "💖😊🔥" and print it



// 10. Split a string with multiple Unicode symbols using `.split('')` and count how many visible characters are shown
