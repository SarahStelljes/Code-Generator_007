var getCharacters = {
  lower: function(){
    var getLower = window.prompt("Would you like to include lowercase letters in your password? Enter 'y' for yes or 'n' for no.");
    getLower = getLower.toLowerCase();
    
    switch(getLower){
      case "y":
        return true;
      case "n":
        return false;
      default:
        window.alert("You need to enter a proper value! Please try again.");
        return getCharacters.lower();
    }
  },
  upper: function(){
    var getUpper = window.prompt("Would you like to include uppercase letters in your password? Enter 'y' for yes or 'n' for no.");
    getUpper = getUpper.toLowerCase();
    
    switch(getUpper){
      case "y":
        return true;
      case "n":
        return false;
      default:
        window.alert("You need to enter a proper value! Please try again.");
        return getCharacters.upper();
    }
  },
  numeric: function(){
    var getNumeric = window.prompt("Would you like to include numeric characters in your password? Enter 'y' for yes or 'n' for no.");
    getNumeric = getNumeric.toLowerCase();
    
    switch(getNumeric){
      case "y":
        return true;
      case "n":
        return false;
      default:
        window.alert("You need to enter a proper value! Please try again.");
        return getCharacters.numeric();
    }
  },
  special: function(){
    var getSpecial = window.prompt("Would you like to include special characters in your password? Enter 'y' for yes or 'n' for no.");
    getSpecial = getSpecial.toLowerCase();
    
    switch(getLower){
      case "y":
        return true;
      case "n":
        return false;
      default:
        window.alert("You need to enter a proper value! Please try again.");
        return getCharacters.special();
    }
  }
};

var randomFunc = {
  lowerFunc: function(){
    //generate a number from 97 to 122
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  },
  upperFunc: function(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  },
  numericFunc: function(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  },
  specialFunc: function(){
    const specailChars = "1@#$%^&*(){}[]=<>/,.";
    return specailChars[Math.floor(Math.random()* specailChars.length)];
  }
}

var generatePassword = function(){
  var getLength = window.prompt("Choose a number between 8-128 for how long you want your password to be.");


  getLength = parseInt(getLength);

  if(getLength >= 8 || getLength <= 128){
  }
  else {
    window.alert("You need to enter a valid number! Please try again.");
    generatePassword();
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
