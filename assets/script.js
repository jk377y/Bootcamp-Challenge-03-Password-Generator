// Password Generator Challenge 03 UTA Bootcamp

//---------------------------------------
//---------------------------------------
// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
//---------------------------------------
//---------------------------------------


// create a function that receives input to specify length of password, select ofTypes to include, and generate a random password from those selections
function generatePassword() {
  let chooseLength = window.prompt("Using NUMBERS ( 0 - 9 )\nHow long would you like your password to be?\nYou may choose between 8 and 128 characters.");
  let pwLength = parseInt(chooseLength);
  // make a failsafe/return if entry isNAN or if outside the range of 8-128
  if (isNaN(pwLength)) {
    window.alert("Please use a NUMBER ( 0 - 9 )")
    return
  }
  if (pwLength < 8 || pwLength > 128) {
    window.alert("Please select a number between 8 and 128.")
    return
  }
  


//---------------------------------------
//---------------------------------------
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//---------------------------------------
//---------------------------------------