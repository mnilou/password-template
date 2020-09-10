// Assignment Code
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

var generateBtn = document.querySelector("#generate");
function askForOptions() {
  var passLength = parseInt(
    prompt("How long do you want your password to be?")
  );
  console.log(passLength);
  
  var passOptions = {
    passLength,
    isLower,
    isUpper,
    isNumber,
    isSpecial,
  };

  return passOptions;
}

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
