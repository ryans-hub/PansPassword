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
generateBtn.addEventListener("click", generatePassword);

//Character Arrays
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numeric = "0123456789".split("");
var special = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|\\}~".split("");

//Confirming what user wants password to contain
function generatePassword() {
  var passwordLength = prompt("Length of password? (8-128)");
  var isLowerCase = confirm("Do you want lowercase letters?");
  var isUpperCase = confirm("Do you want uppercase letters?");
  var isNumeric = confirm("Do you want numbers?");
  var isSpecial = confirm("Do you want special characters?");

  if (passwordLength >= 8 && passwordLength <=128 ) {

    var inputLength = parseInt(passwordLength);

    var passwordAr = [];

  }

  while (passwordAr.length < inputLength) {

    if (isLowerCase) {
      var RandomCharacter = Math.floor(Math.random()*26);
      passwordAr.push(lowerCase[RandomCharacter]);
      
    }
  
    if (isUpperCase) {
      var RandomCharacter = Math.floor(Math.random()*26);
      passwordAr.push(upperCase[RandomCharacter]);
    }
  
    if (isNumeric) {
      var RandomCharacter = Math.floor(Math.random()*10);
      passwordAr.push(numeric[RandomCharacter]);
    }
  
    if (isSpecial) {
      var RandomCharacter = Math.floor(Math.random()*32);
      passwordAr.push(special[RandomCharacter]);
    }
  

  }

}



