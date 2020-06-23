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

// Generate a random password function
function generatePassword() {
// Tell the user to enter a desired password length 
var passwordLength = prompt("How many characters would you like your password to be? Must be between 8 and 128 characters.");

  // Password  must be between 8 and 128 characters 
  if (passwordLength < 8 || passwordLength > 128) {
  // If the character is not between 8 and 128
    return alert("You must choose a character between 8 and 128.");
  }
// Ask the user his criteria for the password 
else {
  var includeUppercase = confirm("Do you want uppercase letters?");
  var includeLowercase = confirm("Do you want lowercase letters?");
  var includeNumeric = confirm("Do you want numbers?");
  var includeSpecialChar = confirm("Do you want special characters?");

 // If there is no character types, a password can't be generated 
 if (
  includeLowercase === false &&
  includeUppercase === false &&
  includeNumeric === false &&
  includeSpecialChar === false
) {
  return alert("One character type must be selected to generate a password.");
} else {

  // for loop for the length of the password length to choose the character types and add characters to a PW string value 
  var passwordArray=[];
  for (i = 0; i < parseInt(passwordLength); i++) {

    if (
      includeUppercase === true
    ) {
      //Math random to get an array index position and then add character to password string 

      var a = uppercaseOptions[Math.floor(Math.random() * uppercaseOptions.length)];
      console.log(a);
      passwordArray.push(a);
      console.log(passwordArray.length);
    }

    if (parseInt(passwordLength) == passwordArray.length) {
      break;
    }

    if (
      includeLowercase === true
    ) {
      //Math random to get an array index position and then add character to password string 

      var b = lowercaseOptions[Math.floor(Math.random() * lowercaseOptions.length)];
      console.log(b);
      passwordArray.push(b);
    }

    if (passwordLength == passwordArray.length) {
      break;
    }

    if (
      includeNumeric === true
    ) {
      //Math random to get an array index position and then add character to password string 

      var c = numberOptions[Math.floor(Math.random() * numberOptions.length)];
      console.log(c);
      passwordArray.push(c);

    }

    if (passwordLength == passwordArray.length) {
      break;
    }

    if (
      includeSpecialChar === true
    ) {
      //Math random to get an array index position and then add character to password string 

      var d = specialOptions[Math.floor(Math.random() * specialOptions.length)];
      console.log(d);
      passwordArray.push(d);

  }

  if (passwordLength == passwordArray.length) {
    break;
  }

    
  } 
} console.log(passwordArray.join(""));
return passwordArray.join(""); 
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