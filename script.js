// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var pass = ""
  var pro = prompt("How many letters do you want. (8 min, 128 max)")
  var pro1 = confirm("Do you want special chaacters. ($, %, &)")
  var pro2 = confirm("Do you want lowercase letters.")
  var pro3 = confirm("Do you want uppercase letters.")
  var pro4 = confirm("Do you want numbers.")

  var arr1 = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","}","|","~"]
  var arr2 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var arr3 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

  var arr = [];

  if (pro1){
    arr.concat(arr1)
  }
  if (pro2){
    arr.concat(arr2)
  }
  // if (pro3){
  //   arr.concat(arr2)
  // }
  if (pro4){
    arr.concat(arr3)
  }

  for(var i = 0; i < pro; i++){// need to fix this so it can returned to click. 
    pass.concat(arr[Math.random(arr.length)])
  }

  return pass
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
