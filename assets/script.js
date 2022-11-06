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
  

  // make prompt windows that accept input to select which type of characters will be used in the final password
  let statingRules = window.confirm("You must choose at least 1 of the following 4 options to continue.");
  if (confirm === true) {
    return
  } else;
  let lowerCaseChoice = window.confirm("Would you like LOWER CASE letters to be used in your password?\nOK = Yes, Cancel = No");
  let upperCaseChoice = window.confirm("Would you like UPPER CASE letters to be used in your password?\nOK = Yes, Cancel = No");
  let numberChoice = window.confirm("Would you like NUMBERS ( 0 - 9 ) to be included in your password?\nOK = Yes, Cancel = No");
  let symbolChoice = window.confirm("Would you like SYMBOLS ( !, @, #, $, %, ^, &, *, (, ) ) to be used in your password?\nOK = Yes, Cancel = No");

  // creating arrays of 4 different types with all acceptable characters that may be used for the password
  let lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
  let upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let symbolArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

  // need to create a place to store all of the chosen criterias
  let selectionChoices = [];

  // for each prompt window that type is selected, if TRUE then .push selectionChoices
  if (lowerCaseChoice === true) {
    selectionChoices.push(...lowerCaseArray);
  }
  if (upperCaseChoice === true) {
    selectionChoices.push(...upperCaseArray);
  }
  if (numberChoice === true) {
    selectionChoices.push(...numberArray);
  }
  if (symbolChoice === true) {
    selectionChoices.push(...symbolArray);
  }
  // wanted to add a message if none of the character arrays was selected then a message would return stating so
  else if (selectionChoices.length === 0) {
    window.alert("You have not followed the directions.\nStart over and select one of the options.");
    return
  } 
  // validation of characters that are available based on the options selected are viewable in the console.log
  console.log(selectionChoices);

  // need to choose i randomized numbers from the ofType selections that were made and push them to a final string
  let randomizedPassword = [];
  for (let i = 0; i < pwLength; i++){
    let randomNumber = Math.random();
    let randomIndex = Math.floor(randomNumber * selectionChoices.length);
    let randomCharacter = selectionChoices[randomIndex];
    randomizedPassword.push(randomCharacter);
  }
  let putThemTogether = randomizedPassword.join('');
  return putThemTogether

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