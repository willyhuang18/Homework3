// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){ 
  var length = window.prompt("Please choose length of 8 - 128 character for your password! ");
while(length < 8 || length > 128 || isNaN(length)){
  length = window.prompt("Please Enter again, you Entered an invalid Character.");
}

var upperCharacter = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
var lowerCharacter = "abcdefghijklmnopqrstuvwxyz";
var specialCharacter = "!@#$%^&*(){}[]=<>/,.";
var number = "0123456789";


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", () => {
writePassword();
});