// Initialize the number of bottles to 99
let numberOfBottles = 99;

// Loop while the numberOfBottles is greater than 0
while (numberOfBottles > 0) {
  // Default term for the bottles is plural "bottles"
  let bottleWord = 'bottles';

  // If there's only one bottle, change the word to singular "bottle"
  if (numberOfBottles === 1) {
    bottleWord = 'bottle';
  }

  // Output the first part of the current verse
  console.log(numberOfBottles + ' ' + bottleWord + ' of beer on the wall');
  console.log(numberOfBottles + ' ' + bottleWord + ' of beer,');
  console.log('Take one down, pass it around,');

  // Decrement the number of bottles for the next iteration
  numberOfBottles--;

  // Update the term for the bottle based on the new count
  bottleWord = (numberOfBottles === 1) ? 'bottle' : 'bottles';

  // Output the second part of the current verse
  if (numberOfBottles === 0) {
    console.log('No more ' + bottleWord + ' of beer on the wall.');
  } else {
    console.log(numberOfBottles + ' ' + bottleWord + ' of beer on the wall.');
  }
}
