// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = prompt("Please choose length of 8 - 128 character for your password! ");
while(length < 8 || length > 128 || isNaN(length)){
  length = prompt("Please Enter again, you Entered an invalid Character.");
}

var upperCharacter = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
var lowerCharacter = "abcdefghijklmnopqrstuvwxyz";
var specialCharacter = "!@#$%^&*(){}[]=<>/,.";
var number = "0123456789";



while(true){
  if(upperCharacter){
    upperCharacter = confirm("Do you want to use UpperCase Character?")
  }
  if (lowerCharacter){
    lowerCharacter = confirm("Do you want to use LowerCase Character?")
  }
  if(specialCharacter){
    specialCharacter = confirm("Do you want to use SpecialCharacter?")
  }
  if(number){
    number = confirm("Do you want to use Number?")
  }
  if(!upperCharacter && !lowerCharacter && !specialCharacter && !number){
    alert("At least one type of character ")
  }
  break;
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
