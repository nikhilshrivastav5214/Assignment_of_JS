// Section 1 – map() and Immutability
// 1. Convert Product Names to Uppercase
// Create an array of product names and use map() to create a new array where every product name is
// converted to uppercase.
let arr = ["laptop", "mobile", "headphones"]
let newArr = arr.map((value) => value.toLocaleUpperCase())
console.log(newArr);



// 2. Add a Currency Symbol to Prices
// Create an array of product prices and use map() to create a new array where each price is displayed with
// a ₹ symbol.
let proPrice = [100, 250, 500]
let nproPrice = proPrice.map((value) => "₹" + value);
console.log(nproPrice);



// 3. Extract User Names
// Create an array of user objects containing name and email. Use map() to create a new array containing
// only the names.
let arrObj = [
    { name: "Rahul", email: "rahul@example.com" },
    { name: "Priya", email: "priya@example.com" }
]
let narrObj = arrObj.map((value) => value.name);
console.log(narrObj);



// 4. Create Updated Product Prices
// Create an array of product prices. Use map() to create a new array where every price is increased by
// 10%. Keep the original array unchanged.
let proPrice1 = [100, 200, 300]
let new1 = proPrice1.map((value) => {
    let inc = value * 0.1 + value;
    return inc;
});
console.log(new1);



// 5. Update Object Data Immutably
// Create an array of user objects with name and role. Use map() and the spread operator to create a new
// array where the role of every user is changed to "developer" without modifying the original array.
let std = [
    { name: "Rahul", role: "student" },
    { name: "Priya", role: "student" }
]
let std1 = std.map(value => ({
    ...value,
    role: "developer"
}))
console.log(std1);
console.log(std);



// 6. Add a New Property Using map()
// Create an array of product objects containing name and price. Use map() to create a new array where
// each product also has an inStock property with the value true.
let users = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 }
]
let user = users.map(value => ({
    ...value,
    inStock: true
}))
console.log(user);



// Section 2 – map() vs forEach()
// 7. Display Technologies Using forEach()
// Create an array of frontend technologies and use forEach() to display every technology.
let tech = ["HTML", "CSS", "JavaScript"]
tech.forEach((value) => value);
console.log(tech[value]);



// 8. Create a New Array Using map()
// Using the same array of frontend technologies, use map() to create a new array where every technology
// is converted to uppercase.
let low = ["html", "css", "javascript"]
let upp = low.map((value) => value.toUpperCase());
console.log(upp);



// 9. Format User Names Using map()
// Create an array of names and use map() to add the text "User: " before every name. Display the new
// array
let old = ["Rahul", "Priya", "Aman"]
let use = old.map((value) => "User:" + value);
console.log(use);



// 10. Filter Available Products
// Create an array of product objects containing name and inStock. Use filter() to create a new array
// containing only the products that are in stock
let product = [
    { name: "Laptop", inStock: true },
    { name: "Mouse", inStock: false }
]
let newPro = product.filter((value) => value.inStock);
console.log(newPro);



// 11. Filter Users by Role
// Create an array of user objects containing name and role. Use filter() to get all users whose role is
// "developer".
let coder = [
    { name: "Rahul", role: "developer" },
    { name: "Priya", role: "student" }
]
let userCoder = coder.filter((value) => value.role === "developer");
console.log(userCoder);




// 12. Filter Expensive Products
// Create an array of product objects containing name and price. Use filter() to get products with a price
// greater than 1000.
let obj = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
]
let obj1 = obj.filter((value) => value.price > 1000);
console.log(obj1);



// 13. Filter Active Users
// Create an array of users containing name and isActive. Use filter() to get only the active users.
let User = [
    { name: "Rahul", isActive: true },
    { name: "Priya", isActive: false }
]
let newUser = User.filter((value) => value.isActive);
console.log(newUser);




// 14. Filter Gmail Addresses
// Create an array of email addresses and use filter() to get only the emails that include "@gmail.com".
let email = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"]
let valid = email.filter((value) => value.includes("@gmail.com"));
console.log(valid);




// Section 4 – reduce() and Accumulator Pattern
// 15. Calculate the Total Cart Price
// Create an array of product prices and use reduce() to calculate the total price of all items in the cart.
let price = [500, 1200, 300]
let calcPrice = price.reduce((total, value) => total += value);
console.log(calcPrice);




// 16. Count Total Products
// Create an array of product names and use reduce() with an accumulator to count the total number of
// products.
let count = ["Laptop", "Mouse", "Keyboard"]
let calcCount = count.reduce((item, total) => item + 1, 0);
console.log(calcCount);




// 17. Calculate the Total Quantity
// Create an array of cart item objects containing name and quantity. Use reduce() to calculate the total
// quantity of all items.
let cart = [
    { name: "Laptop", quantity: 1 },
    { name: "Mouse", quantity: 7 }
]
let qty = cart.reduce((item, count) => item + count.quantity, 0);
console.log("total qty=", qty);




// 18. Calculate Total Order Amount
// Create an array of order objects containing amount. Use reduce() to calculate the total order amount.
let order=[
 { amount: 500 },
 { amount: 1000 },
 { amount: 750 }
]
let amount=order.reduce((total,amt)=>total+amt.amount,0);
console.log(amount);




// 19. Create a Comma-Separated String
// Create an array of frontend technologies and use reduce() to combine them into a single
// comma-separated string.
let front=["HTML", "CSS", "JavaScript"]











