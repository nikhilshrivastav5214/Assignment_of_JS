// Section 1 – Working with Objects
// 1. Create a User Object
// Create an object named user containing the properties name, email, and role. Display the complete
// object.

let user = {
    name: "Rahul",
    email: "rahul@example.com",
    role: "developer"
}
console.log(user);


// 2. Access Object Properties Using Dot Notation
// Create a product object containing name, price, and category. Use dot notation to display the product
// name and price
const product = {
    name: "Laptop",
    price: 50000,
    category: "Electronics"
};
console.log(product.name);
console.log(product.price);


// 3. Access Object Properties Using Bracket Notation
// Create a user object containing name and email. Use bracket notation to display the email property
const users = {
    name: "Rahul",
    email: "rahul@example.com"
};
console.log(user["email"]);


// 4. Dynamic Property Access
// Store a property name in a variable and use bracket notation to access that property from an object.
const user = {
    name: "Rahul",
    email: "rahul@example.com"
};
const key = "name";
console.log((user["name"]));


// 5. Update an Object Property
// Create a user object with name and role. Update the role from "student" to "developer" and display the
// updated object
let obj = {
    name: "Rahul",
    role: "student"
}
obj["role"] = "developer"
console.log(obj);


// 6. Add a New Property
// Create a profile object containing name and email. Add a new property named isLoggedIn with the
// value true.
let profileObj = {
    name: "Rahul",
    email: "rahul@example.com"
}
profileObj["isLoggedIn"] = "true"
console.log(profileObj);



// Section 2 – Object Keys, Values and Entries
// 7. Get Object Keys
// Create a user object containing name, email, and role. Use Object.keys() to get all the property names.
const userObj = {
    name: "Rahul",
    email: "rahul@example.com",
    role: "developer"
};
console.log(Object.keys(userObj));



// 8. Get Object Values
// Create a product object containing name, price, and category. Use Object.values() to get all the values
// from the object
const proObj = {
    name: "Laptop",
    price: 50000,
    category: "Electronics"
};
console.log(Object.values(proObj));



// 9. Get Object Entries
// Create a settings object and use Object.entries() to convert its properties into key-value pairs.
const settings = {
    theme: "dark",
    language: "English",
    notifications: true
};
console.log(Object.entries(settings));



// 10. Display Object Entries
// Create an object containing a user's name and email. Use Object.entries() and forEach() to display each
// key along with its value.
const user1 = {
    name: "Rahul",
    email: "rahul@example.com"
}
console.log(Object.entries(user1));



// 11. Object Destructuring
// Create a user object containing name, email, and role. Use object destructuring to extract name and
// email into separate variables.
const userObj1 = {
    name: "Rahul",
    email: "rahul@example.com",
    role: "developer"
};
let { name, email, role } = userObj1
console.log(name,email,role);


// 12. Destructuring with Renaming
// Create a product object containing name and price. Use destructuring to store the name property in a
// variable named productName.
const proObj1 = {
    name: "Laptop",
    price: 50000
};
let { name , price } = proObj1
console.log( "productName=", name);



// 13. Create an Object Using Shorthand Properties
// Create variables named name, email, and role. Use shorthand property syntax to create a user object
// using these variables.
const name = "Rahul";
const email = "rahul@example.com";
const role = "developer";

const users1 = { name, email, role };
console.log(users1);


// 14. Destructure Function Parameters
// Create a function named displayUser that receives a user object. Use object destructuring in the function
// parameters to access and display name and email.
//  const displayUser=({
//     name: "Rahul",
//     email: "rahul@example.com"
// });

// const ({name,email})=(displayUser)
// console.log(name);



// 15. Copy an Object Using Spread
// Create a user object and use the spread operator to create a copy of it
// const userr = {
//     name: "Rahul",
//     role: "developer"
// };
// let newUser = userr
// let newUser1 = [...userr]
// console.log(newUser1);
// console.log(userr);


// 16. Update an Object Using Spread
// Create a user object containing name and role. Use the spread operator to create a new object and
// update the role to "developer"
const userr1 = {
    name: "Rahul",
    role: "student"
};
const updateUser = {
    ...userr1,
    role: "developer"
};
console.log(updateUser);


// 17. Combine Two Arrays Using Spread
// Create one array containing frontend technologies and another containing backend technologies. Use
// the spread operator to combine them into a single array.
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];
const fullStack = [...frontend, ...backend]
console.log(fullStack);


// 18. Rest Parameters
// Create a function named showSkills that accepts a developer's name as the first parameter and any
// number of skills using a rest parameter. Display the name and skills.
function showSkills(name, ...skills) {
    console.log("Developer Name:", name);
    console.log("Skills:", skills);
}

showSkills("Rahul", "HTML", "CSS", "JavaScript");










