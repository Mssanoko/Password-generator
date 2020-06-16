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

// Copy Password button 
function copyPassword() {
  var copyBtn = document.querySelector("#copy");
  password.select(); 
  document.execCommand("copy");
}
copyBtn.addEventListener("click", copyPassword); 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);