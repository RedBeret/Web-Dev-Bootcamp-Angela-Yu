function isLeap (year) {
  /** ************Don't change the code above****************/

  // Check if the year is divisible by 4
  if (year % 4 === 0) { // '%' gives the remainder of a division.
    // '===' means "is exactly equal to"

    // If the year is divisible by 100, it's not a leap year unless it's also divisible by 400
    if (year % 100 === 0) { // Checking if the year is divisible by 100
      if (year % 400 === 0) { // Checking if the year is divisible by 400
        return 'Leap year.';
      } else { // Year is divisible by 100 but not by 400
        return 'Not leap year.';
      }
    } else { // Year is divisible by 4 but not by 100
      return 'Leap year.';
    }
  } else { // Year is not divisible by 4
    return 'Not leap year.';
  }
}

// Test Cases function
function runTests () {
  const test1 = 2400;
  console.log(isLeap(test1)); // Expected output: "Leap year."

  const test2 = 1989;
  console.log(isLeap(test2)); // Expected output: "Not leap year."
}

/** ************Don't change the code below****************/

runTests(); // This will execute the test cases
