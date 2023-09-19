function fibonacciGenerator (n) {
  // Do NOT change any of the code above 👆

  // Write your code here:

  // Initialize an empty array to store the Fibonacci sequence
  var output = [];

  // Manually populate the first two numbers in the sequence (0 and 1) only if n is greater than 0
  if (n > 0) output.push(0);
  if (n > 1) output.push(1);

  // Generate the remaining numbers in the sequence
  for (let i = 2; i < n; i++) {
    // Calculate the next number in the sequence as the sum of the two previous numbers
    const nextTerm = output[i - 1] + output[i - 2];

    // Append the next number to the output array
    output.push(nextTerm);
  }

  // Return an array of fibonacci numbers starting from 0.
  return output;

  // Do NOT change any of the code below 👇
}
