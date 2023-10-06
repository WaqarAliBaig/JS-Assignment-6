// Functions

// Q1: Write a function that displays current date & time in your
// browser.

var currentDate = new Date();
alert(currentDate);

// Q2: Write a function that takes first & last name and then it
// greets the user using his full name.

var firstName = "Waqar";
var lastName = "Ali";

function greet(x, y) {
  console.log(x + y);
}

greet("Hello " + firstName, lastName);

// Q3: Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

var user1 = +prompt("User 1: Please enter a value");
var user2 = +prompt("User 2: Please enter a value");

function sum(num1, num2) {
  return num1 + num2;
}

var result = sum(user1, user2);
console.log(result);

// // Q4: Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

var num1 = +prompt("Please enter the 1st value");
var operator = prompt(
  "Please enter the operator value to perform the desire operation"
);
var num2 = +prompt("Please enter the 2nd value");

function calc(no1, opr, no2) {
  if (opr === "+") {
    return no1 + no2;
  } else if (opr === "-") {
    return no1 - no2;
  } else if (opr === "*") {
    return no1 * no2;
  } else if (opr === "/") {
    return no1 / no2;
  }
}

var result = calc(num1, operator, num2);
console.log(result);

// Q5: Write a function that squares its argument.

var number = +prompt("Enter a number");

function sumOfSquares(num) {
  return num * num;
}

var sum = sumOfSquares(number);
console.log(sum);

// Q6: 

// Q7: Write a function that take start and end number as inputs
// & display counting in your browser.

var startNum = +prompt("Enter a start number.");
var endNum = +prompt("Enter a end number.");

function counting() {
  for (var i = startNum -1 ; i < endNum; i++) {
    var sum = i + 1;
    console.log(sum);
  }
}

counting();

// Q8 to Q14 Sir didn't teach these questions yet.