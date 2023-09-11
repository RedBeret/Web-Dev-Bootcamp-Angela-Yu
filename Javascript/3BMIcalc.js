/// / version 1
// function bmiCalculator(weight, height) {
//     var bmi = weight / (height * height);
//     return Math.round(bmi);
// }

// version 2
function bmiCalculator (weight, height) {
  const bmi = weight / Math.pow(height, 2);
  return Math.round(bmi);
}

// Example:
const bmi = bmiCalculator(65, 1.8);
console.log(bmi); // This should log 20 to the console
