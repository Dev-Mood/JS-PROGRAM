// Prompt the user to enter the first number and parse the input as an integer
let num1 = parseInt(prompt("Enter the first number: "));

// Prompt the user to enter the second number and parse the input as an integer
let num2 = parseInt(prompt("Enter the second number: "));

// Prompt the user to enter the third number and parse the input as an integer
let num3 = parseInt(prompt("Enter the third number: "));

// Check whether the numbers are in numeric order
if (num1 <= num2 && num2 <= num3) {
  // If they are, print a message indicating that
  console.log("The numbers are in numeric order.");
} else {
  // If they are not, print a message indicating that
  console.log("The numbers are not in numeric order.");
}
