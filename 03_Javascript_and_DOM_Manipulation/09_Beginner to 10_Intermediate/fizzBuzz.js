const output = [];
let count = 1;

function fizzBuzz () {
  // Check if the count is a multiple of both 3 and 5
  if (count % 3 === 0 && count % 5 === 0) {
    output.push('FizzBuzz');
  }
  // Check if the count is a multiple of 3
  else if (count % 3 === 0) {
    output.push('Fizz');
  }
  // Check if the count is a multiple of 5
  else if (count % 5 === 0) {
    output.push('Buzz');
  }
  // If the count is neither a multiple of 3 nor 5, push the count itself
  else {
    output.push(count);
  }

  // Increment the count for the next iteration
  count++;

  // Log the current state of the output array
  console.log(output);
}

// Call the function to execute it
fizzBuzz();
