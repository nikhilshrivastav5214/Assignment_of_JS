
// 1.Create a button and use addEventListener() to display a message when the button is clicked.

let btn = document.querySelector("#btn")
function button() {
    console.log("Button Clicked!");
}
btn.addEventListener("click", button)


// 2.Create a paragraph and a button. Use addEventListener() to change the paragraph text when the button
// is clicked.

let msg = document.getElementById("msg")
let click = document.getElementById("click")
click.addEventListener("click", (e) => {
    msg.textContent = "Thanks for visiting!";
});


// 3.Create a heading and use addEventListener() with the mouseover event to change its text when the
// mouse moves over it.

let head = document.getElementById("head");
head.addEventListener("mouseover", (e) => {
    head.textContent = "Mouse is over the heading!"
})


// 4.Create a button and use the event object to identify the element that was clicked.
let clicked = document.getElementById("clicked");
clicked.addEventListener("click", (e) => {
    console.log("BUTTON");
})


// 5.Create a <div> and use a mousemove event to display the mouse coordinates using the event object's
// clientX and clientY properties.
let div = document.getElementById("div");
div.addEventListener("mouseover", (e) => {
    console.log(e.clientX);
    console.log(e.clientY);
})



// 6.Create an input field and use the event object's target.value to display the entered value.

const username=document.querySelector("#username");
username.addEventListener("change",(e)=>{
    console.log("You typed:",username.value);
})



// 7.Create a button and attach a click event using addEventListener(). Create a separate function and use
// removeEventListener() to stop the click event when required.

let buttons = document.getElementById("show");
let removeButton = document.getElementById("removeBtn");
let message = document.getElementById("message");

function showMessage() {
    message.textContent = "Button clicked!";
}
buttons.addEventListener("click", showMessage);

removeButton.addEventListener("click", function () {
    buttons.removeEventListener("click", showMessage);
    message.textContent = "Event removed!";
});

