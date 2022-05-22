var theSelected = "";
var getCharacters = {
  lower: function(){
    var getLower = window.confirm("Would you like to include lowercase letters in your password?");
    
    switch(getLower){
      case true:
        return true;
      case false:
        return false;
      default:
        window.alert("Something went wrong!");
        return getCharacters.lower();
    }
  },
  upper: function(){
    var getUpper = window.confirm("Would you like to include uppercase letters in your password?");
    
    switch(getUpper){
      case true:
        return true;
      case false:
        return false;
      default:
        window.alert("Something went wrong!");
        return getCharacters.upper();
    }
  },
  numeric: function(){
    var getNumeric = window.confirm("Would you like to include numeric characters in your password?");
    
    switch(getNumeric){
      case true:
        return true;
      case false:
        return false;
      default:
        window.alert("Something went wrong!");
        return getCharacters.numeric();
    }
  },
  special: function(){
    var getSpecial = window.confirm("Would you like to include special characters in your password?");
    
    switch(getSpecial){
      case true:
        return true;
      case false:
        return false;
      default:
        window.alert("Something went wrong!");
        return getCharacters.special();
    }
  }
};
var characters = {
  lowerChars: "abcdefghijklmnopqrstuvwxyz",
  upperChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numericChars: "1234567890",
  specialChars: "1@#$%^&*(){}[]=<>/,."
};
// var randomFunc = {
//   lowerFunc: function(){
//     var lowerChars = "abcdefghijklmnopqrstuvwxyz";
//   },
//   upperFunc: function(){
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//   },
//   numericFunc: function(){
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
//   },
//   specialFunc: function(){
//     const specailChars = "1@#$%^&*(){}[]=<>/,.";
//     return specailChars[Math.floor(Math.random()* specailChars.length)];
//   }
// }

var generatePassword = function(){
  theSelected = "";
  var getLength = window.prompt("Choose a number between 8-128 for how long you want your password to be.");
  var generatedPassword = "";
  getLength = parseInt(getLength);
  if(getLength === "" || getLength === null){
    return generatePassword();
  }

  if(getLength >= 8 && getLength <= 128){
    var haveLower = getCharacters.lower();
    var haveUpper = getCharacters.upper();
    var haveNumeric = getCharacters.numeric();
    var haveSpecial = getCharacters.special();
    var requriements = haveLower + haveUpper + haveNumeric + haveSpecial;

    if(requriements === 0){
      window.alert("You need to choose at least one of the four options (lowercase, uppercase, numeric, or special) to generate a password! Please try again.");
      return generatePassword();
    }
    if(haveLower){
      theSelected = theSelected + characters.lowerChars;
    }
    if(haveUpper){
      theSelected = theSelected + characters.upperChars;
    }
    if(haveNumeric){
      theSelected = theSelected + characters.numericChars;
    }
    if(haveSpecial){
      theSelected = theSelected + characters.specialChars;
    }
    while (generatedPassword.length < getLength){
      var randomIndex = Math.floor(Math.random() * theSelected.length);
      var randomChar = theSelected.charAt(randomIndex);
      generatedPassword = generatedPassword + randomChar;
    }
  }
  else if(getLength < 8){
    window.alert("That number is too low! You need to enter a number 8-128");
    return generatePassword();
  }
  else if(getLength > 128){
    window.alert("That number is too high! You need to enter a number 8-128");
    return generatePassword();
  }
  else {
    window.alert("You need to enter a valid number! Please try again.");
    return generatePassword();
  }
  return generatedPassword
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
