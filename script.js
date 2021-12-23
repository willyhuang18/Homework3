// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = window.prompt("Please choose length of 8 - 128 character for your password! ");
while(length < 8 || length > 128 || isNaN(length)){
  length = window.prompt("Please Enter again, you Entered an invalid Character.");
}

var upperCharacter = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
var lowerCharacter = "abcdefghijklmnopqrstuvwxyz";
var specialCharacter = "!@#$%^&*(){}[]=<>/,.";
var number = "0123456789";
var char = upperCharacter + lowerCharacter + specialCharacter + number;

var upper = window.confirm("Do you want to use UpperCase Character?");
var lower = window.confirm("Do you want to use LowerCase Character?");
var special = window.confirm("Do you want to use SpecialCharacter?");
var numbers = window.confirm("Do you want to use Number?");


  if(!upper){
     var char = lowerCharacter + specialCharacter + number;
  }else if (!lower){
    var char = upperCharacter + specialCharacter + number;
  }else if(!special){
    confirm("Do you want to use SpecialCharacter?")
    var char = upperCharacter + lowerCharacter + number;
  }else if(!numbers){
    var char = upperCharacter + lowerCharacter + specialCharacter;
  }else if(!upper && !lower && !special && !numbers){
    alert("At least one type of character ")
     confirm("Do you want to use UpperCase Character?")
      confirm("Do you want to use LowerCase Character?")
      confirm("Do you want to use SpecialCharacter?")
     confirm("Do you want to use Number?")
  }





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  for (var i=0; i<length; i++) {
      var rnum = Math.floor(Math.random() * char.length);
      passwordText += char.substring(rnum,rnum+1);
  }
  console.log(passwordText);
}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  writePassword();
});