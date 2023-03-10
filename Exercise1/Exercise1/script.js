function changeNameBox() {
    alert("I am an alert box!");
}

function myFunction() {
    let person = prompt("What is your name?", "Enter here.");
    document.getElementById("target").innerHTML = `, ${person}`;
}