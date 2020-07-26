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
var specialChars = "$#@!%~^&*()_+=-[]{}"; // might need more 
var numberStr = "0123456789";

// you could change varialbes into hard coded arrays such as ['a', 'b', ... ]
var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz".split("");
var uppderCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specialArr = "$#@!%~^&*()_+=-[]{}".split(""); // could need modification
var numberArr = "0123456789".split("");

// variables for store user's input
var confirmNumbers = false;
var confirmUpper = false;
var confirmLower = false;
var confirmSpecial = false;
var lengthChosen = 0;

var minLength = 8;
var maxLength = 128;
var basePassword = "";

// log to see the data
console.log(lowerCaseArr);
console.log(uppderCaseArr);
console.log(specialArr);
console.log(numberArr);

// **************************
// USER INPUT - function ()?
// **************************

function userInput(){
  lengthChosen = prompt("Enter the length of your password");
  while (lengthChosen < minLength || lengthChosen > maxLength) {
    alert("Length of password has to be greater than 7 and less than 129!");
    lengthChosen = prompt("Enter the length of your password");
  } 

  confirmNumbers = confirm("Do you want numbers in your password?");
  confirmUpper = confirm("Do you want uppercase letters?");
  confirmLower = confirm("Do you want lowercase letters?");
  confirmSpecial = confirm("Do you want special characters?");

  console.log("Want numbers?" + confirmNumbers);
  console.log("Want numbers?" + confirmUpper);
  console.log("Want numbers?" + confirmLower);
  console.log("Want numbers?" + confirmSpecial);
}
  
function typeSet(){
  if(!confirmLower || !confirmNumbers || !confirmSpecial || !confirmUpper ){
    alert("You need at least one typeset of character to generate the password from, try again!")
    userInput();
  }
}
// ***********
// MAIN LOGIC
// ***********

// you can make the following code into function () and call it at the appropriate place
// function() ? and/or 
// another function to handle random index and to add the char to an array 
// with the array passed as input argument

// Include in password at least one letter with the user's choices of numbers, special chars, uppercase and/or lowercase chars
// to meet user's requiremence
function addToPassword(){
  if (confirmNumbers) {
    var index = Math.floor(Math.random() * numberArr.length);
    basePassword += numberArr[index];
  }
  console.log(basePassword);



  if (confirmUpper) {
    var index = Math.floor(Math.random() * uppderCaseArr.length);
    basePassword += uppderCaseArr[index];
  }
  console.log(basePassword);



  if (confirmLower) {
    var index = Math.floor(Math.random() * lowerCaseArr.length);
    basePassword += lowerCaseArr[index];
  }
  console.log(basePassword);



  if (confirmSpecial) {
    var index = Math.floor(Math.random() * specialArr.length);
    basePassword += specialArr[index];
  }
  console.log(basePassword);
  
}

// Function: 
function generatePassword() {
  var remaining = lengthChosen - basePassword.length;
  var allChosenStr = "";

  // you could call confirm function here
  userInput();
  typeSet();
  addToPassword();
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
    basePassword += allChosenStr[index]; // append to the existing password
    console.log(index);
  }
  console.log('Password before randomized order', basePassword);

  // Randomize the order of chars in the password - can be skipped or add your own code
  // var pwdArr = basePassword.split("");
  // var randomOrdered = [];
  // randomOrdered.push(pwdArr[pwdArr.length - 1]);
  // randomOrdered.push(pwdArr[pwdArr.length - 2]);
  // for (var i = 0; i < (pwdArr.length - 2); i++) {
  //   randomOrdered.push(pwdArr[i]);
  // };
  // basePassword = randomOrdered.join("");


  console.log("Final password", basePassword);
  return basePassword;
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
