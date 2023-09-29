// Declare an array containing the names
const names = ['James', 'Jack', 'Joe', 'Jon', 'Jane', 'Jasmine'];

function whoPaying (names) {
  // Calculate the total number of people in the names array
  var numberOfPeople = names.length;

  // Generate a random number between 0 and the length of the names array - 1
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);

  // Fetch the name that corresponds to the random number
  var randomPerson = names[randomPersonPosition];

  // Concatenate the name with the message and return it
  return randomPerson + ' is going to buy lunch today!';
}

// Call the function and log the result
console.log(whoPaying(names));
