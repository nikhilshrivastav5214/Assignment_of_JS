// Section 1 - Basic Array Operations
// 1. Create and Display an Array
// Create an array containing the names of five fruits and display the complete array

let fruits = ["apple", "mango", "orange", "banana", "grapes"]
console.log(fruits);


// 2. Add an Element Using push()
// Create the following array and use push() to add "JavaScript" at the end.
// Example:
// Input: ["HTML", "CSS"]
// Output: ["HTML", "CSS", "JavaScript"]

let arr = ["HTML", "CSS"]
arr.push("JavaScript")
console.log(arr);

// 3. Remove an Element Using pop()
// Remove the last element from the given array using pop().
// Example:
// Input: ["HTML", "CSS", "JavaScript"]
// Output: ["HTML", "CSS"]

let arr1 = ["HTML", "CSS", "JavaScript"]
arr1.pop("JavaScript")
console.log(arr1);

// 4. Remove the First Element Using shift()
// Remove the first element from the following array using shift().
// Example:
// Input: ["Red", "Blue", "Green"]
// Output: ["Blue", "Green"]

let arr2 = ["Red", "Blue", "Green"]
arr2.shift("Red")
console.log(arr2);


// 5. Add an Element at the Beginning
// Use unshift() to add "HTML" at the beginning of the following array.
// Example:
// Input: ["CSS", "JavaScript"]
// Output: ["HTML", "CSS", "JavaScript"]
let elem = ["CSS", "JavaScript"]
elem.unshift("HTML")
 console.log(elem);


// 6. Add Multiple Elements
// Create an array containing two programming languages and use push() to add two more languages to
// the array
let languages = ["HTML", "CSS"]
languages.push("JavaScript", "React")
console.log(languages);


// 7. Remove an Element Using splice()
// Remove "CSS" from the following array using splice().
// Example:
// Input: ["HTML", "CSS", "JavaScript", "React"]
// Output: ["HTML", "JavaScript", "React"]

let Remove = ["HTML", "CSS", "JavaScript", "React"]
Remove.splice(1, 1)
console.log(Remove);

// 8.Use splice() to add "CSS" between "HTML" and "JavaScript"
let add = ["HTML", "JavaScript"]
add.splice(1, 0, "CSS")
console.log(add);


// 9.Use splice() to replace "Java" with "JavaScript"
let rep = ["HTML", "CSS", "Java"]
rep.splice(2, 1, "JavaScript")
console.log(rep);

//10.Use splice() to create a new array containing "CSS", "JavaScript", and "React".

let ex = ["HTML", "CSS", "JavaScript", "React", "Node.js"]
ex.splice(0, 1)
ex.splice(3, 1)
console.log(ex);


// Section 3 - Searching in Arrays
// 12. Find the Index of an Element
// Use indexOf() to find the index of "JavaScript".

let idx = ["HTML", "CSS", "JavaScript", "React"]
console.log(idx.indexOf("JavaScript"));

//13.Create an array of programming languages and use indexOf() to find the position of "React".
let pro = ["HTML", "CSS", "JavaScript", "React", "Node.js"]
 console.log(pro.indexOf("React"));


// 14.Create an array of user objects containing name and age. Use find() to get the user whose name is
// "Rahul".
let obj = [
    { name: "Rahul", age: 20 },
    { name: "Priya", age: 22 }
]

let user = obj.find(user => user.name === "Rahul");
console.log(user);


// 15.Using an array of user objects, use findIndex() to find the index of the user whose name is "Priya".

let userObj = [
    { name: "Rahul", age: 20 },
    { name: "Priya", age: 22 }
]

let search = userObj.findIndex(search => search.name === "Priya");
console.log(search);



// 16. Flatten a Nested Array
// Use flat() to convert the nested array into a single-level array
let nest = [1, 2, [3, 4]]
console.log(nest.flat(Infinity));



// 17.Use flat() with an appropriate depth to flatten the following array completely
let depthNest = [1, [2, [3, 4]]]
console.log(depthNest.flat(Infinity));




// 18. Display Every Element Using forEach()
// Create an array containing five colors and use forEach() to display every color
let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
colors.forEach(function (color) {
    console.log(color);
});


// 19.Create an array of programming languages and use forEach() to display each element along with its
// index.

let prm = ["HTML", "CSS", "JavaScript"]
prm.forEach(function (index, value) {
    console.log(index, value);
})


// 20.Perform the following operations on an array:
// 1. Add "React" using push().
// 2. Remove the first element using shift().
// 3. Display the final array.

let proLang=["HTML", "CSS", "JavaScript"]
proLang.push("React")
proLang.shift()
console.log(proLang);



