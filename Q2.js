// Prompt the user to enter an integer and parse the input as an integer
let number = parseInt(prompt("Enter an integer: "));

// Check whether the number is positive
if (number > 0) {
  // If it is, print a message indicating that
  console.log("The number is positive.");
// Check whether the number is negative
} else if (number < 0) {
  // If it is, print a message indicating that
  console.log("The number is negative.");
// If the number is not positive or negative, it must be zero
} else {
  // Print a message indicating that the number is zero
  console.log("The number is zero.");
}
