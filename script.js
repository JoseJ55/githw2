// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Functions is working now needs the min and max for password.
function generatePassword(){
  var p = prompts();
  var password = "";

  var arr1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var arr2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var arr3 = ["1","2","3","4","5","6","7","8","9","0"]
  var arr4 = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","}","|","~"]
  var arr = [];

  if (p[1] === true){ // part for lowercase letters
    if (arr.length == 0){
      arr = [].concat(arr1)
    }
    else{
      arr = arr.concat(arr1)
    }
  }

  if (p[2] === true){ // part for uppercase letters
    if (arr.length == 0){
      arr = [].concat(arr2)
    }
    else{
      arr = arr.concat(arr2)
    }
  }

  if (p[3] === true){ // part for numbers 
    if (arr.length == 0){
      arr = [].concat(arr3)
    }
    else{
      arr = arr.concat(arr3)
    }
  }

  if (p[4] === true){ // part for special chacters
    if (arr.length == 0){
      arr = [].concat(arr4)
    }
    else{
      arr = arr.concat(arr4)
    }
  }

  // this is to add to random characters to the password variable
  var i = 0;
  while(i < p[0]){
    var num = Math.floor(Math.random() * arr.length)
    password += arr[num]
    i++
  }

  return password
}

function prompts(){
  var pro = prompt("How many letters do you want. (8 min, 128 max)")
  var pro1 = confirm("Do you want lowercase letters.")
  var pro2 = confirm("Do you want uppercase letters.")
  var pro3 = confirm("Do you want numbers.")
  var pro4 = confirm("Do you want special charcters. ($, %, &)")

  var p = [pro, pro1, pro2, pro3, pro4]

  return p
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
