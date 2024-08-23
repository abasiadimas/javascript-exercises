const reverseString = function (str) {
  let splitString = str.split("");
  let reversedLetters = splitString.reverse();
  let reversedFinalString = reversedLetters.join("");

  return reversedFinalString;
};

// Do not edit below this line
module.exports = reverseString;
