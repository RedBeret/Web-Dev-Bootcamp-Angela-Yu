// Initialize an empty array to store FizzBuzz results
const output = [];

/**
 * Function to perform FizzBuzz operation.
 */
function fizzBuzz () {
  // Loop from 1 to 100 (inclusive)
  for (let count = 1; count <= 100; count++) {
    // Check if count is a multiple of both 3 and 5
    if (count % 3 === 0 && count % 5 === 0) {
      output.push('FizzBuzz');
    }
    // Check if count is a multiple of 3
    else if (count % 3 === 0) {
      output.push('Fizz');
    }
    // Check if count is a multiple of 5
    else if (count % 5 === 0) {
      output.push('Buzz');
    }
    // If count is neither a multiple of 3 nor 5, push the count itself
    else {
      output.push(count);
    }
  }
  // Log the current state of the output array
  console.log(output);
}

// Call the function to execute it
fizzBuzz();
