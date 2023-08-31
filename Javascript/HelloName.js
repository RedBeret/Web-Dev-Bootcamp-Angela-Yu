// Prompt the user to enter their name
var enteredName = prompt("What is your name?");

// Convert the entered name to lowercase
var lowerName = enteredName.toLowerCase();

// Get the first letter of the name and capitalize it
var firstLetter = lowerName.charAt(0).toUpperCase();

// Slice the remaining part of the name
var remainingName = lowerName.slice(1);

// Construct the properly capitalized name
var capitalizedFullName = firstLetter + remainingName;

// Display the greeting with the capitalized name
alert("Hello, " + capitalizedFullName + "!");

// After some thought, looked at how to reduce lines of code
// var name = prompt("What is your name?");
// alert("Hello, " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!");