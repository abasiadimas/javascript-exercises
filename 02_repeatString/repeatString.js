const repeatString = function (str, num) {
  if (num < 0) {
    return "ERROR";
  }
  let finalString = "";

  for (let i = 0; i < num; i++) {
    if (str === "") {
      finalString = "";
    } else if (num === 0) {
      finalString = "";
    } else if (num === 1) {
      finalString += str;
    } else if (num > 1) {
      finalString += str;
    }
  }

  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
