// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Characters can be add in a password 
var charTypes = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "1234567890",
  special: "!$%^&*()-=+[]{};#:@~,./<>?",
}
// Variable Declaration
var uppercaseOptions = charTypes.uppercase.split("");
  console.log(uppercaseOptions);
  console.log(uppercaseOptions[5]);

  var lowercaseOptions = charTypes.lowercase.split("");
  console.log(lowercaseOptions);

  var numberOptions = charTypes.numbers.split("");
  console.log(numberOptions);

  var specialOptions = charTypes.special.split("");
  console.log(specialOptions);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}
// Generate a random password function
function generatePassword() {
// Tell the user to enter a desired password length 
var passwordLength = prompt("How many characters would you like your password to be?");

  // Password  must be between 8 and 128 characters 
  if (passwordLength < 8 || passwordLength > 128) {
    return alert("Enter a character length between 8 and 128.");
  }
// Ask the user his criteria for the password 
else {
  var includeUppercase = confirm("Would you like uppercase letters?");
  var includeLowercase = confirm("Would you like lowercase letters?");
  var includeNumeric = confirm("Would you like numbers?");
  var includeSpecialChar = confirm("Would you like special characters?");
}

// Copy Password button 
function copyPassword() {
  var copyBtn = document.querySelector("#copy");
  password.select(); 
  document.execCommand("copy");
}
copyBtn.addEventListener("click", copyPassword); 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}