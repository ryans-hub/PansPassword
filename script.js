// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Event listener for generate button, prompts
generateBtn.addEventListener("click", promptMe);

//function to prompt user 
function promptMe() {
  let prompt1 = prompt("Length of password? (8-128)");
  let prompt2 = prompt("Type of characters?");
}

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numeric = "0123456789".split("");
var special = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|\\}~".split("");

