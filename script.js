// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Values from each criteria assigned to a variable
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

//Generate random password
function generatePassword() {

//Ask the user to enter a desired password length 
var confirmLength = (prompt("How many characters would you like your password to be?"));
}

// Password length of at least 8 characters and no more than 128 characters
while (confirmLength < 7 || confirmLength > 129) {
  return alert("Enter a character length between 8 and 128.");
}

// Determine parameters of password 
var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);