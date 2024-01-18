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

//Character Arrays
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numeric = "0123456789".split("");
var special = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|\\}~".split("");

//Function that prompts/confirms user input for password, also generates password
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

  // While loop to execute until satisfies the desired PW length
  while (passwordAr.length < inputLength) {


    // sequences of if statements to randomly push selected characters into the empty password array
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

  // Convert password array to string
  var passwordString = passwordAr.join("");

  // return the generated password string when this function is called
  return passwordString;

}



