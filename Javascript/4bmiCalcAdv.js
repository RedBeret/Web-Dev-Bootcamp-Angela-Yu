function bmiCalculator (weight, height) {
  // Calculate the raw BMI value
  let bmi = weight / Math.pow(height, 2);

  // Round the BMI value to the nearest whole number
  bmi = Math.round(bmi);

  // Determine and return the BMI category based on the calculated value
  if (bmi < 18.5) {
    return 'Your BMI is ' + bmi + ', so you are underweight.';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'Your BMI is ' + bmi + ', so you have a normal weight.';
  } else {
    return 'Your BMI is ' + bmi + ', so you are overweight.';
  }
}

// Examples:

// Calculate BMI for a person weighing 60kg and 1.8m tall
var bmi = bmiCalculator(60, 1.8);
console.log(bmi); // Expected output: "Your BMI is 19, so you have a normal weight."

// Calculate BMI for a person weighing 80kg and 1.8m tall
var bmi = bmiCalculator(80, 1.8);
console.log(bmi); // Expected output: "Your BMI is 25, so you are overweight."

// Calculate BMI for a person weighing 50kg and 1.8m tall
var bmi = bmiCalculator(50, 1.8);
console.log(bmi); // Expected output: "Your BMI is 15, so you are underweight."
