// Section 1 - Math Object
// 1. Random Number
// Use Math.random() to generate and display a random number
 console.log(Math.random());

//  2. Random Whole Number
// Use Math.random() and Math.floor() to generate a random whole number between 1 and 10.
// Example:
// Output: Any whole number from 1 to 10

let randomNumber=Math.floor(Math.random()*10)+1
console.log(randomNumber);

// 3. Round a Number
// Use Math.round() to round the number 4.6 to the nearest integer
console.log(Math.round(4.6));

// 4. Floor and Ceil
// Use Math.floor() and Math.ceil() on the number 7.3 and display both results
console.log(Math.floor(7.3),Math.ceil(7.3));



// 5. Absolute Value
// Use Math.abs() to find the positive value of -25.
console.log(Math.abs(-25));


// 6. Power and Square Root
// Use Math.pow() to calculate 2 raised to the power 3 and Math.sqrt() to find the square root of 64.
console.log(Math.pow(2,3),Math.sqrt(64));

// 7. Minimum and Maximum
// Use Math.min() and Math.max() to find the smallest and largest values from 10, 25, 5, and 18.
console.log( "min=", Math.min(10,25,5,18), "max=",Math.max(10,25,5,18));


// Section 2 - String Built-in Methods
// 8. Extract Part of a String
// Create a string "JavaScript Programming" and use slice() to extract the word "JavaScript".
let str="JavaScript Programming"
console.log(str.slice(0,10));


// 9. Split a String
// Create a string "HTML,CSS,JavaScript" and use split() to separate the values.
let str1="HTML,CSS,JavaScript"
console.log(str1.split(","));


// 10. Replace Text
// Create a string "Hello World" and use replace() to replace "World" with "JavaScript"

let str2="Hello World"
console.log(str2.replace("World","JavaScript"));


// 11. Check Email
// Create a variable email containing an email address and use includes() to check whether it contains the
// @ symbol.
let email="user#example.com"
console.log(email.includes("@"));


// 12. Check File Extension
// Create a variable fileName containing "assignment.pdf" and use endsWith() to check whether the file
// has a .pdf extension.

let fileName="assignment.pdf"
console.log(fileName.endsWith(".pdf"));

// 13. Remove Extra Spaces
// Create a string with extra spaces, such as " Hello JavaScript ", and use trim() to remove the spaces
// from the beginning and end.

let str3=" Hello JavaScript "
console.log(str3.trim(" "));


// 14. Replace a Greeting
// Create a variable greet containing "Hello User" and use replace() to change "User" to a name of your
// choice.
let greet="Hello User"
console.log(greet.replace("User","Sahil"));


// Section 3 - Number Built-in Methods
// 15. Format a Decimal Number
// Create a variable containing the number 12.56789 and use toFixed(2) to display the number with two
// decimal places.

let num=12.56789;
console.log(num.toFixed(2));


// 16. Format a Price
// Create a variable price containing a decimal value and use toFixed(2) to display it as a price with two
// decimal places

let price=99.5;
console.log(price.toFixed(2));


// Section 4 - Date Object
// 17. Current Date and Time
// Create a Date object using new Date() and display the current date and time.

let date=new Date();
console.log(date.getDate());
console.log(date.toLocaleTimeString());


// 18. Store a Specific Date
// Create a Date object for a specific date of your choice and display it
let date1=new Date();
console.log(date1.toLocaleDateString());


// 19. Current Timestamp
// Use Date.now() to get and display the current timestamp.
console.log(Date.now());



