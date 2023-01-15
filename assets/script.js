
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// variables 
var userChoice;
var passwordLengthSelected = false;
var passwordArray = [];
var flatPasswordArray = [];

function generatePassword() {
  lenghtChoice()
  checkLength()
  charsChoice()
  checkChars()
  randomPassword()
  }
  
  
  //welcome prompt
  
  alert("WELCOME TO PASSWORD GENERATOR, please press GENERATE PASSWORD to start");
  
  
  //lenght
  function lenghtChoice() {
    if (!passwordLengthSelected) {
      userChoice = prompt("How long do you want your password to be? Min 10, Max 64");
    }
    if (userChoice < 10 ) {
      alert("Mininum is 10 characters lenght, try again");
      window.location.reload(true)
      throw new Error()  
      }
    if (userChoice > 64) {
      alert("Maximum is 64 characters, try again");
      window.location.reload(true)
      throw new Error() 
      }
    if (isNaN(userChoice)) {
      alert("Don't get that, try again");
      window.location.reload(true)
      throw new Error()
    }  return userChoice
  }
  
  function checkLength() {
    if ((!userChoice)) {
      alert("Please choose your password lenght");
      window.location.reload(true);
      passwordArray.length = 0
      throw new Error();
    }
  }
  
  // characters choice
  function charsChoice() {
    var lowerCase = confirm("Do you want lowercase characters in your password?")
    if (lowerCase) { passwordArray.push(lowerCasedCharacters); }
    var upperCase = confirm("Do you want uppercase in to your password?")
    if (upperCase) { passwordArray.push(upperCasedCharacters); }
    var numChars = confirm("Do you want add numbers in your password?")
    if (numChars) { passwordArray.push(numericCharacters); }
    var specChars = confirm("Do you want to add special characters to your password?")
    if (specChars) { passwordArray.push(specialCharacters); }
    flatPasswordArray = passwordArray.flat()
    return flatPasswordArray
  }
  
  function checkChars() {
    if (flatPasswordArray.length == 0) {
      alert("You password needs at least one type of character. Try again")
      passwordArray.length = 0
      window.location.reload(true);
      throw new Error()
    }
  }
  
  //randomize password 
  function randomPassword() {
    var password = "";
    for (var i = 0; i < userChoice; i++) {
      var randomIndex = Math.floor(Math.random() * flatPasswordArray.length);
      var randomChar = flatPasswordArray[randomIndex];
      password += randomChar;
    }
    return password
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = randomPassword()
    passwordArray.length = 0;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
