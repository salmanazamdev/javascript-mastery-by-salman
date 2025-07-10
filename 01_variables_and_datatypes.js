//1: Check Age Eligibility
let user = 9
if (user < 18) {
  console.log('Eligible')
}   else if (user >= 18) {
  console.log('Ineligible')
}


//2: Check if a number is even or odd
let number = 10
if (number % 2 === 0) {
  console.log('Even')
} else {
  console.log('Odd')
}


//3: Check if a number is positive, negative, or zero
let num = -5
if (num > 0) {
  console.log('Positive')
} else if (num < 0) {
  console.log('Negative')
} else {
  console.log('Zero')
}


//4: Checking Working of Loose or Strict Equality
let a = 5
let b = '5'
console.log(a == b)  // Loose equality 
console.log(a === b) // Strict equality 


//5: Discount Calculator (set discount to 20%)
let price = 1000
let discount = 20
let discountedPrice = price - (price * discount / 100)
console.log(`Discounted Price: ${discountedPrice}`)

//6: Const Reassignment Mistake
const country = "Pakistan"
country = "India" // This will cause an error because constants cannot be reassigned


//7: Login logic using and operator
let email = "user@example.com"
let password = "password123"

    if (email && password) {
  console.log("Login successful")
}   else {
  console.log("Missing credentials")
}


//8: Battery level warning
let batterylevel = 10
if (batterylevel < 15) {
    console.log("Low battery, please charge karlo")
}

//9: User online status simulation (boolean)
let isOnline = false;
        isOnline = true; // Simulating user login
console.log("User is online:", isOnline);

