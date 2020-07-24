// Assignment Code
var generateBtn = document.querySelector("#generate");

// 1. Change variable names to your own
// 2. Change the groups of code into functions and call/execute them at the right places
// 3. Modify or remove the comments

// ***********
// DATA
// ***********

// change the all varialbe names, comments, etc.
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "$#@!~^&*()_+[]{}"; // might need more 
var numberStr = "0123456789";

// you could change varialbes into hard coded arrays such as ['a', 'b', ... ]
var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz".split("");
var uppderCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specialArr = "$#@!~^&*()_+[]{}".split(""); // could need modification
var numberArr = "0123456789".split("");

// variables for store user's input
var confirmNumbers = false;
var confirmUpper = false;
var confirmLower = false;
var confirmSpecial = false;
var lenPwdChosen = 0;

var minLen = 8;
var _password = "";

// log to see the data
console.log(lowerCaseArr);
console.log(uppderCaseArr);
console.log(specialArr);
console.log(numberArr);

// **************************
// USER INPUT - function ()?
// **************************

lenPwdChosen = prompt("Enter the length of your password");
while (lenPwdChosen < minLen) {
  alert("Length of password has to be greater than 6");
  lenPwdChosen = prompt("Enter the length of your password");
} 

confirmNumbers = confirm("Do you want numbers in your password?");
confirmUpper = confirm("Do you want uppercase letters?");
confirmLower = confirm("Do you want lowercase letters?");
confirmSpecial = confirm("Do you want special characters?");

// ***********
// MAIN LOGIC
// ***********

// you can make the following code into function () and call it at the appropriate place
// function() ? and/or 
// another function to handle random index and to add the char to an array 
// with the array passed as input argument

// Include in password at least one letter with the user's choices of numbers, special chars, uppercase and/or lowercase chars
// to meet user's requiremence
if (confirmNumbers) {
  var index = Math.floor(Math.random() * numberArr.length);
  _password += numberArr[index];
}
console.log(_password);

if (confirmUpper) {
  var index = Math.floor(Math.random() * uppderCaseArr.length);
  _password += uppderCaseArr[index];
}
console.log(_password);

if (confirmLower) {
  var index = Math.floor(Math.random() * lowerCaseArr.length);
  _password += lowerCaseArr[index];
}
console.log(_password);

if (confirmSpecial) {
  var index = Math.floor(Math.random() * specialArr.length);
  _password += specialArr[index];
}
console.log(_password);

// Function: 
function generatePassword() {
  var remaining = lenPwdChosen - _password.length;
  var allChosenStr = "";

  // you could call confirm function here

  // after implementing the required chars, create a string candidates of strings for random selections
  if (confirmNumbers) {
    allChosenStr += numberStr;
  }
  if (confirmUpper) {
    allChosenStr += upperCaseChars;
  }
  if (confirmLower) {
    allChosenStr += lowerCaseChars;
  }
  if (confirmSpecial) {
    allChosenStr += specialChars;
  }
  console.log(allChosenStr);

  for (var i = 0; i < remaining; i++) {
    var index = Math.floor(Math.random() * allChosenStr.length);
    _password += allChosenStr[index]; // append to the existing password
  }
  console.log('Password before randomized order', _password);

  // Randomize the order of chars in the password - can be skipped or add your own code
  var pwdArr = _password.split("");
  var randomOrdered = [];
  randomOrdered.push(pwdArr[pwdArr.length - 1]);
  randomOrdered.push(pwdArr[pwdArr.length - 2]);
  for (var i = 0; i < (pwdArr.length - 2); i++) {
    randomOrdered.push(pwdArr[i]);
  };
  _password = randomOrdered.join("");


  console.log("Final password", _password);
  return _password;
}

// Write password to the #password input
function writePassword() {
  // could call your functions here below


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
