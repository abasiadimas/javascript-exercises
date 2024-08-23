const removeFromArray = function (arr, ...values) {
  const returnedArray = [];

  arr.forEach((element) => {
    if (!values.includes(element)) {
      returnedArray.push(element);
    }
  });

  return returnedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
