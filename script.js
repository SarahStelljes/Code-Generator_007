// Assignment code here
var charArrays = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialChar: ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"],
  chosen: []
};

var lowercase = function(){
  var getLowercase = window.prompt("Would you like to have lowercase characters in your password? Enter 'y' for yes or 'n' for no.");
  getLowercase = getLowercase.toLowerCase();
  if(getLowercase === "" || getLowercase === null){
    return lowercase();
  }
  if(getLowercase === "y"){
    return true;
  }
  else if(getLowercase === "n"){
    return false;
  }
  else {
    window.alert("You need to provide a valid answer! Please try again.");
    return lowercase();
  }
};

var uppercase = function(){
  var getUppercase = window.prompt("Would you like to have uppercase characters in your password? Enter 'y' for yes or 'n' for no.");
  getUppercase = getUppercase.toLowerCase();
  if(getUppercase === "" || getUppercase === null){
    return uppercase();
  }
  if(getUppercase === "y") {
    return true;
  }
  else if(getUppercase === "n"){
    return false;
  }
  else {
    window.alert("You need to provide a valid answer! Please try again.");
    return uppercase();
  }
};

var numeric = function(){
  var getNumeric = window.prompt("Would you like to have numeric characters in your password? Enter 'y' for yes or 'n' for no.");
  getNumeric = getNumeric.toLowerCase();
  if(getNumeric === "" || getNumeric === null){
    return numeric();
  }
  if(getNumeric === "y"){
    return true;
  }
  else if (getNumeric === "n"){
    return false;
  }
  else{
    window.alert("You need to provide a valid answer! Please try again.");
    return numeric();
  }
};

var special = function(){
  var getSpecialChar = window.prompt("Would you like to have special characters in your password? Enter 'y' for yes or 'n' for no.");
  getSpecialChar = getSpecialChar.toLowerCase();
  if(getSpecialChar === "" || getSpecialChar === null){
    return special();
  }
  if(getSpecialChar === "y"){
    return true;
  }
  else if(getSpecialChar === "n"){
    return false;
  }
  else{
    window.alert("You need to provide a valid answer! Please try again.");
    return special();
  }
};

var randomFunc = {
  lowerFunc: function(){
    var lowerRando = Math.random() * 1000;
    if(lowerRando <= 38){
      charArrays.chosen.push(charArrays.lowercase[0]);
    }
    else if(lowerRando > 38 && lowerRando <= 76){
      charArrays.chosen.push(charArrays.lowercase[1]);
    }
    else if(lowerRando > 76 && lowerRando <= 114){
      charArrays.chosen.push(charArrays.lowercase[2]);
    }
    else if(lowerRando > 114 && lowerRando <= 152){
      charArrays.chosen.push(charArrays.lowercase[3]);
    }
    else if(lowerRando > 152 && lowerRando <= 190){
      charArrays.chosen.push(charArrays.lowercase[4]);
    }
    else if(lowerRando > 190 && lowerRando <= 228){
      charArrays.chosen.push(charArrays.lowercase[5]);
    }
    else if(lowerRando > 228 && lowerRando <= 266){
      charArrays.chosen.push(charArrays.lowercase[6]);
    }
    else if(lowerRando > 266 && lowerRando <= 304){
      charArrays.chosen.push(charArrays.lowercase[7]);
    }
    else if(lowerRando > 304 && lowerRando <= 342){
      charArrays.chosen.push(charArrays.lowercase[8]);
    }
    else if(lowerRando > 342 && lowerRando <= 380){
      charArrays.chosen.push(charArrays.lowercase[9]);
    }
    else if(lowerRando > 380 && lowerRando <= 418){
      charArrays.chosen.push(charArrays.lowercase[10]);
    }
    else if(lowerRando > 418 && lowerRando <= 456){
      charArrays.chosen.push(charArrays.lowercase[11]);
    }
    else if(lowerRando > 456 && lowerRando <= 494){
      charArrays.chosen.push(charArrays.lowercase[12]);
    }
    else if(lowerRando > 494 && lowerRando <= 532){
      charArrays.chosen.push(charArrays.lowercase[13]);
    }
    else if(lowerRando > 532 && lowerRando <= 570){
      charArrays.chosen.push(charArrays.lowercase[14]);
    }
    else if(lowerRando > 570 && lowerRando <= 608){
      charArrays.chosen.push(charArrays.lowercase[15]);
    }
    else if(lowerRando > 0.038 && lowerRando <= 0.076){
      charArrays.chosen.push(charArrays.lowercase[1]);
    }
    else if(lowerRando > 0.038 && lowerRando <= 0.076){
      charArrays.chosen.push(charArrays.lowercase[1]);
    }
    else if(lowerRando > 0.038 && lowerRando <= 0.076){
      charArrays.chosen.push(charArrays.lowercase[1]);
    }
    else if(lowerRando > 0.038 && lowerRando <= 0.076){
      charArrays.chosen.push(charArrays.lowercase[1]);
    }
    else if(lowerRando > 0.038 && lowerRando <= 0.076){
      charArrays.chosen.push(charArrays.lowercase[1]);
    }
    else if(lowerRando > 0.038 && lowerRando <= 0.076){
      charArrays.chosen.push(charArrays.lowercase[1]);
    }
    else if(lowerRando > 0.038 && lowerRando <= 0.076){
      charArrays.chosen.push(charArrays.lowercase[1]);
    }
    else if(lowerRando > 0.038 && lowerRando <= 0.076){
      charArrays.chosen.push(charArrays.lowercase[1]);
    }
    else if(lowerRando > 0.038 && lowerRando <= 0.076){
      charArrays.chosen.push(charArrays.lowercase[1]);
    }
    else if(lowerRando > 0.038 && lowerRando <= 0.076){
      charArrays.chosen.push(charArrays.lowercase[1]);
    }
  },
}

var generatePassword = function(){
  var getLength = window.prompt("Choose a number between 8-128 for how long you want your password to be.");

  getLength = parseInt(getLength);

  if(getLength >= 8 || getLength <= 128){
    if(lowercase){
      if(uppercase){
        if(numeric){
          //all is allowed
          if(special) {
            while(getLength !== getLength){
            }
          }
          //all but special
          else{

          }
        }
        else{
          //all but numeric
          if(special){

          }
          //all but numeric and special
          else{

          }
        }
      }
      else{
        if(numeric){
          //all but uppercase
          if(special){

          }
          //all but uppercase and special
          else{

          }
        }
        else{
          //all but uppercase and numeric
          if(special){

          }
          //just lowercase
          else{

          }
        }
      }
    }
    else{
      if(uppercase){
        if(numeric){
          //all but lowercase
          if(special){

          }
          //all but lowercase and special
          else{

          }
        }
        else{
          //all but lowercase and numeric
          if(special){

          }
          //just uppercase
          else{

          }
        }
      }
      else{
        if(numeric){
          //all but lowercase and uppercase
          if(special){

          }
          //just numeric
          else{

          }
        }
        else{
          //just special
          if(special){

          }
          //BIG NO NO, there was none chosen
          else{
            window.alert("You HAVE to choose at least one!");
            generatePassword();
          }
        }
      }
    }
  }
  else {
    window.alert("You need to enter a valid number! Please try again.");
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
