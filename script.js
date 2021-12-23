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
var char = '';

var upper = window.confirm("Do you want to use UpperCase Character?");
var lower = window.confirm("Do you want to use LowerCase Character?");
var special = window.confirm("Do you want to use SpecialCharacter?");
var numbers = window.confirm("Do you want to use Number?");


  if(upper){
     char += upperCharacter; 
  }

   if (lower){
    char += lowerCharacter;
  }

   if(special){
    char += specialCharacter;
  }

   if(numbers){
     char += number;
  }
  

  if(!upper && !lower && !special && !numbers){

    alert("At least one type of character ")

  return generatePassword();

  }

  var passwordText = '';

  for (var i = 0; i < length; i++) {
  
      var num = Math.floor(Math.random() * char.length);
  
      passwordText += char.substring(num,num+1);
  
  }
  return passwordText;
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