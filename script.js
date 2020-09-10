// Assignment Code using variables and arrays
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lowerString.split("");
console.log(lowerArray);
var upperArray = lowerString.toUpperCase().split("");
console.log(upperArray);
var numberString = "0123456789";
var numberArray = numberString.split("");
console.log(numberArray);
var specialString = "!@#$%^&*";
var specialArray = specialString.split("");
console.log(specialArray);
//started the query for password generator using parseInt and conditional code for length
var generateBtn = document.querySelector("#generate");
function askForOptions() {
  var passLength = parseInt(
    prompt("How long do you want your password to be?")
  );
  //setting parameters for the password
  console.log(passLength);
  if (passLength < 8 || passLength > 128) {
    alert("Password must be greater than 8 and less than 128!");
    return;
  }
  var isLower = confirm("Would you like lowercase?");
  var isUpper = confirm("Would you like uppercase?");
  var isNumber = confirm("Would you like numbers?");
  var isSpecial = confirm("Would you like special characters?");
//password verifier code
  if (
    isLower === false &&
    isUpper === false &&
    isNumber === false &&
    isSpecial === false
  ) {
    alert("Must choose one character type");
    return;
  }
//setting up the return password variables
  var passOptions = {
    passLength,
    isLower,
    isUpper,
    isNumber,
    isSpecial,
  };

  return passOptions;
}
//calculating the parameter responses using variables, array, function, conditional, concat, and looping
function generatePassword() {
  var options = askForOptions();
  console.log(options);
  var superArray = [];
  var results = [];

  if (options.isLower) {
    superArray = superArray.concat(lowerArray);
  }
  if (options.isUpper) {
    superArray = superArray.concat(upperArray);
  }
if (options.isNumber) {
  superArray = superArray.concat(numberArray);
}
if (options.isSpecial) {
  superArray = superArray.concat(specialArray);
}
 for(var i = 0; i < options.passLength; i++) {
   var index = Math.floor(Math.random() * superArray.length);
   console.log(index);
   var passDigit = superArray[index];
   results.push(passDigit)
 }
 return results.join("")

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
