
// 1.Create a heading with an id of title and use getElementById() to select it and change its text.
let h1=document.getElementById("title").textContent="Hello Java Script"

// 2.Create a paragraph with a class description and use querySelector() to select it and change its text
// content.

let p=document.querySelector(".desc").textContent="New Description"

// 3.Create three <li> elements with the class item. Use querySelectorAll() to select all of them and change
// their text color using the style property.

let items = document.querySelectorAll(".item");

items.forEach(function(item) {
    item.style.color = "blue";
});

// 4.Create a paragraph containing some text and use textContent to replace its content with a new message
let p1=document.querySelector("#msg").textContent="Welcome to JavaScript!"

// 5.Create a <div> with an id of container and use innerHTML to add a heading and a paragraph inside it
let div=document.querySelector("#container")
div.innerHTML = `"<h2>My Website </h2" "<p>Welcome to my website!</p>"`;
 
// 7.Create a button and use classList.add() to add a class to it. Then use classList.remove() to remove the
// class.

let btn=document.getElementById("btn")
btn.classList.add("btn1")
btn.classList.remove("btn1")


// 8.Create a heading and use the style property to change its color, fontSize, and backgroundColor.
let head=document.getElementById("head")
head.classList.add("head")


// 9.Create a button with a custom data-id attribute and use the dataset property to read its value.
let pro=document.getElementById("productBtn")
let id = pro.dataset.id;
console.log(id);


// 10.Create a new <p> element using createElement(), add some text to it using textContent, and display it
// on the webpage.

let para =document.createElement("para")
para.textContent="This paragraph was created using JavaScript.";
document.getElementById("container").appendChild(para);


// 11.Create a <ul> in HTML. Use JavaScript to create a new <li> element and add it to the list using
// appendChild().
 let skill=document.querySelector("#skill")
 let li=document.createElement("li")
 let li1=document.createElement("li")
 let li2=document.createElement("li")
 li.textContent="HTML"
 li1.textContent="JAVA SCRIPT"
 li2.textContent="CSS"
 document.getElementById("skill").appendChild(li)
 document.getElementById("skill").appendChild(li1)
 document.getElementById("skill").appendChild(li2)


// 12. Create a list and use append() to add an item at the end and prepend() to add an item at the beginning.
    let list = document.getElementById("list");
    let react = document.createElement("li");
    react.textContent = "React";
    list.append(react);

    let html = document.createElement("li");
    html.textContent = "HTML";
    list.prepend(html);



// 13.Create a list containing three items and remove one item using either removeChild() or remove().

let listed=document.getElementById("listed")
let item=listed.children[1]
listed.removeChild(item)


// 14.Create a button and use cloneNode() to create a copy of the button. Add the cloned button to the
// webpage.

let btns=document.getElementById("myButton")
let clonebtn=btns.cloneNode(true);
document.body.append(clonebtn);
