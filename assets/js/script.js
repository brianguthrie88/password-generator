// Assignment Code
var generateBtn = document.querySelector("#generate");

//these variables are arrays that hold values that could possibly be in the users password
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","{","}","|","~"];
//this is an empty array that will hold the values that could be in the password from the different questions the user answers
var userChoices = [];
//create a variable that is an empty string for the completed password
var completedPassword = "";
//this is a counter that shows if a user wants a specific type of character in their password then the counter goes up one
var counter = 0;


//when this function is called, it will ask the user different criteria questions so that it can be added or not added to the overall password that is created
function generatePassword() {
  //creating a varaible that will hold how many characters the users wants in their password
  var numberOfCharacters = parseInt(window.prompt("How many characters would you like your password to have? It has to be at least 8 and no more than 128"));
  //if statement that sees if the user does not enter what they are supposed to they will be prompted with what they should do and can start over
  if (numberOfCharacters < 8 || numberOfCharacters > 128 || !numberOfCharacters) {
    window.alert("The password has to be at least 8 characters and no more than 128 characters");
    return;
  }
  
  //window shows a confirm statement of whether or not the user wants lowercase letters in their password and makes that a variable
  var isLowerCase = window.confirm("Would you like to include lowercase characters?");
  //if statement that if the user wants lowercase letters in their password, then the lowerCase array is added to the userChoices array as possible values in the generated password
  if (isLowerCase) {
    userChoices = userChoices.concat(lowerCase);
    //this creates a random pick based on lowercase array length and then picks an element in that array to put in the completed password string so that the 
    // users choice has to be in the generated password
    var randomPick = Math.floor(Math.random() * lowerCase.length);
    completedPassword += lowerCase[randomPick];
    //counter will go up if user wants lowercase characters is true
    counter++;
  } 

  //window shows a confirm statement of whether or not the user wants uppercase letters in their password and makes that a variable
  var isUpperCase = window.confirm("Would you like to include uppercase characters?");
  //if statement that if the user wants uppercase letters in their password, then the upperCase array is added to the userChoices array as possible values in the generated password
  if (isUpperCase) {
    userChoices = userChoices.concat(upperCase);
    //this creates a random pick based on uppercase array length and then picks an element in that array to put in the completed password string so that the 
    // users choice has to be in the generated password
    var randomPick = Math.floor(Math.random() * upperCase.length);
    completedPassword += upperCase[randomPick];
    //counter will go up if user wants uppercase characters is true
    counter++;
  }

  //window shows a confirm statement of whether or not the user wants numbers in their password and makes that a variable
  var isNumbers = window.confirm("Would you like to include numbers?");
  //if statement that if the user wants numbers in their password, then the numbers array is added to the userChoices array as possible values in the generated password
  if (isNumbers) {
    userChoices = userChoices.concat(numbers);
    //this creates a random pick based on numbers array length and then picks an element in that array to put in the completed password string so that the 
    // users choice has to be in the generated password
    var randomPick = Math.floor(Math.random() * numbers.length);
    completedPassword += numbers[randomPick];
    //counter will go up if user wants number characters is true
    counter++;
  }

  //window shows a confirm statement of whether or not the user wants special characters in their password and makes that a variable
  var isSpecialCharacters = window.confirm("Would you  like to include special characters?");
  //if statement that if the user wants special characters in their password, then the specialCharacters array is added to the userChoices array as possible values in the generated password
  if (isSpecialCharacters) {
    userChoices = userChoices.concat(specialCharacters);
    //this creates a random pick based on specialCharacters array length and then picks an element in that array to put in the completed password string so that the 
    // users choice has to be in the generated password
    var randomPick = Math.floor(Math.random() * specialCharacters.length);
    completedPassword += specialCharacters[randomPick];
    //counter will go up if user wants special characters is true
    counter++;
  }

  //if the user does not pick any of the possible criteria for the password, then they are prompted to pick at least one of the criteria
  //they also have to press the generate button again to start the prompts over
  if (!isLowerCase && !isUpperCase && !isNumbers && !isSpecialCharacters) {
    window.alert("You must choose at least one character type for your password");
    return;
  }
  
  //this is a for loop that will iterate based on the number of characters the user wants their password to be minus the counter
  for (var i = 0; i < numberOfCharacters - counter; i++) {
    //this variable is created to randomly pick a character in the userChoices array. This will happen over and over for the length of the characters that the user wants
    var randomPick = Math.floor(Math.random() * userChoices.length);
    //completed password is the empty string with the random pick added into it
    completedPassword = completedPassword + userChoices[randomPick];
  } 
  //this returns the completed password with random values for the amount of characters the user wants
  return completedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);