// Original list of guests with proper casing
var guestList = ["Joe", "Bob", "Rob", "Sob"];

// Prompt user for their name and immediately convert to lowercase
var guestName = prompt("What is your name?").toLowerCase();

// Convert first letter to uppercase and the rest to lowercase
var formattedGuestName = guestName.charAt(0).toUpperCase() + guestName.slice(1);

// Check if the formatted name exists in the guest list
if (guestList.includes(formattedGuestName)) {
    alert("Welcome, " + formattedGuestName + "!");
} else {
    alert("I'm sorry, you are not on the guest list.");
}
