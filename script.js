// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Functions is working now need to make uppercase, the min and max for password, and look into why i get undifined every now and then.

function generatePassword(){
  var p = prompts();
  var password = "";

  var arr1 = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","}","|","~"]
  var arr2 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var arr3 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

  var arr = [];
  var a;
  // console.log(p)
  // console.log(p[1])

  if (p[1] === true){
    // arr = [].concat(arr1)
    // console.log(arr)
    // console.log(arr.length)

    if (arr.length == 0){
      arr = [].concat(arr1)
      // console.log(arr)
      // console.log("1")
    }
    else{
      arr = arr.concat(arr1)
      // console.log(arr)
    }
  }

  if (p[2] === true){
    // arr = [].concat(arr1)
    // console.log(arr)
    // console.log(arr.length)

    if (arr.length == 0){
      arr = [].concat(arr2)
      // console.log(arr)
      // console.log("1")
    }
    else{
      arr = arr.concat(arr2)
      // console.log(arr)
    }
  }

  // if (p[3] === true){
  //   // arr = [].concat(arr1)
  //   // console.log(arr)
  //   // console.log(arr.length)

  //   if (arr.length != 0){
  //     a = arr.concat(arr3)
  //     // console.log(a)
  //   }
  //   else{
  //     a = [].concat(arr3)
  //     // console.log(a)
  //   }
  // }

  if (p[3] === true){
    // arr = [].concat(arr1)
    // console.log(arr)
    // console.log(arr.length)

    if (arr.length != 0){
      arr = arr.concat(arr3)
      // console.log(arr)
    }
    else{
      arr = [].concat(arr3)
      // console.log(arr)
    }
  }

  // if (p[2]){
  //   console.log(arr)
  //   a = arr.concat(arr2)
  //   console.log(a)
  // }
  // if (pro3){
  //   arr.concat(arr2)
  // }
  if (p[4]){
    arr.concat(arr3)
  }

  var i = 0;
  while(i < p[0]){
    var num = Math.floor(Math.random() * arr.length) + 1
    password += arr[num]
    // console.log(a[num])
    // console.log(a.length)
    i++
  }

  console.log(password)
  return password
}

function prompts(){
  var pro = prompt("How many letters do you want. (8 min, 128 max)")
  var pro1 = confirm("Do you want special chaacters. ($, %, &)")
  var pro2 = confirm("Do you want lowercase letters.")
  var pro3 = confirm("Do you want uppercase letters.")
  var pro4 = confirm("Do you want numbers.")

  var p = [pro, pro1, pro2, pro3, pro4]

  return p
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
