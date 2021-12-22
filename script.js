// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = prompt("Please choose length of 8 - 128 character for your password! ");
while(length < 8 || length > 128 || (isNaN)){
  length = prompt("Please Enter again, you Entered an invalid Character.");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function (){
  writePassword();
});