// Tagged Template Literals Practice


// 1. Create a tag function `boldIt` that wraps all values with <b></b>
function boldIt(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + str + (values[i] ? `<b>${values[i]}</b>` : '');
    }, '');
}


// 2. Make a tag function `warnEmpty` that replaces missing (null or '') values with "[Missing]"
function warnEmpty(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i];
        const displayValue = (value === null || value === '') ? '[Missing]' : value;
        return result + str + displayValue;
    }, '');
}

// 3. Write a tag function `highlightPositive` that highlights numbers > 0 with green color
function highlightPositive(strings, ...values) {  // ...values means it can take any number of values. 
    return strings.reduce((result, str, i) => {
        const value = values[i];
        const highlightedValue = (typeof value === 'number' && value > 0) ? `<span style="color: green;">${value}</span>` : value;
        return result + str + highlightedValue;
    }, '');
}

// 4. Create a tag `shout` that turns all inserted values to UPPERCASE

// 5. Use a tag function `safeHtml` to escape <, >, and & in user input

// 6. Build a `highlight` tag that wraps values with <mark></mark> (already practiced, repeat for confidence)

// 7. Create a `currency` tag that converts numbers into ₹ format (e.g. ₹1,000.00)

// 8. Write a tag that checks if any value is a number above 100 — if yes, append a 🚀 emoji

// 9. Write a tag function that formats the output like a markdown string: Hello **John**!

// 10. Combine 2 values inside a tag: `sumTag` should return the total if two numbers are inserted
