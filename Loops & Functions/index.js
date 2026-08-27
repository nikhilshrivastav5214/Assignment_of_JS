// Section 1 - Basic Loops
// Part A - for Loop

// 1. Print Numbers
// Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//  2. Print Even Numbers
// Write a program to print all even numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 3. Print Odd Numbers
// Write a program to print all odd numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// 4. Reverse Counting
// Write a program to print numbers from 10 to 1 using a loop.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


//  5. Sum of Numbers
// Write a program to calculate the sum of numbers from 1 to 10.

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum =", sum);


// 6. Multiplication Table
// Take a number and print its multiplication table up to 10.
let num = 5
for (let i = 1; i <= 10; i++) {
    console.log(i*num);
}


// Part B - while Loop
// 7. Basic while Loop
// Write a program to print numbers from 1 to 10 using a while loop.
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 8. Sum of Even Numbers
// Write a program to calculate the sum of all even numbers from 1 to 20
let i = 1;
let sum=0;
while (i <= 20) {
    if (i % 2 == 0) {
        sum+=i;
    }
    i++;
}
console.log("sum of even num:",sum);


// Stop the Loop Using break
// Write a program using a while loop to print numbers from 1 onwards, but stop the loop when the
// number reaches 6 using the break statement.

let i = 0;
while (i <= 10) {
    if (i === 5) {
        break;
    }
    i++;
    console.log(i);
}


// Skip a Number
// Print numbers from 1 to 10, but skip the number 5 using the continue statement.

let i = 1;
while (i <= 10) {
    if (i === 5) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}


// 11. Function with a Parameter
// Create a function named greetUser(name) that takes a name as a parameter and displays a greeting
// message.
// Example:
// Input: Rahul
// Output: Hello, Rahul

function greetUser(name="Guest",greet ="Hello"){
    console.log(`${greet},${name}`);
}
greetUser('Nikhil')

// 12. Add Two Numbers
// Create a function that takes two numbers as parameters and returns their sum.
 function add(num1,num2){
   console.log("addition=",num1+num2);;
 }
add(5,4)


// 13. Even or Odd Function
// Create a function that takes a number and checks whether it is even or odd

function check(num){
    if(num%2==0){
        console.log("even=",num);
    }else{
        console.log("odd=",num);
    }
}
check(5)


// 14. Square of a Number
// Create a function that takes a number and returns its square

function square(num){
    console.log("squre is=",num**2);
}
square(5)


// 15. Largest of Two Numbers
// Create a function that takes two numbers and returns the greater number.
 function Largest(num1,num2){
    if(num1>num2){
        console.log("1st num largest:",num1);
    }else{
        console.log("2nd num largest:",num2);
    }
 }
 Largest(5,2)


// 16. Calculate Total Price
// Create a function named calculateTotal(price, quantity) using a function declaration. The function
// should calculate and display the total price.
// Example:
// Input: price = 100, quantity = 3
// Output: Total Price: 300

function calcTotal(price, quantity){
    console.log("totalPrice=",price*quantity);
}
calcTotal(105,5)


// 17. Print Numbers Using a Function
// Create a function printNumbers(n) that prints numbers from 1 to n using a loop.
// Example:
// Input: 5
// Output: 1 2 3 4 5

function printNumbers(n){
    for(i=1; i<=n; i++){
        console.log(i);
    }
}
printNumbers(5)


// 18. Multiplication Table Function
// Create a function printTable(num) that prints the multiplication table of the given number

function printTable(num){
    for(i=1; i<=10; i++){
        console.log(i*num);
    }
}
 printTable(5)


// 19. Sum from 1 to N
// Create a function sumNumbers(n) that calculates and returns the sum of numbers from 1 to n.

function sumNumbers(n) {
    let sum = 0;
    for (i = 1; i < n; i++) {
        sum += i;
    }
    console.log("sum=", sum);
}
sumNumbers(5)