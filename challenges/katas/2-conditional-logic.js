// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function areValuesEqual(left, right) {
  return left === right;
}
// The strict equality operator (===) checks if the values of two operands are equal and of the same type.
// It returns true if the operands are strictly equal and false otherwise.
// So, we can simply use the strict equality operator to compare the values of 'left' and 'right' and return the result.


function areValuesNotEqual(left, right) {
  return left !== right;
}
// The inequality operator (!==) checks if the values of two operands are not equal or not of the same type.
// It returns true if the operands are not equal and false if they are equal.
// By using the inequality operator, we can compare the values of 'left' and 'right' and return the result.


function isFromThe60s(year) {
  // Check if the year is greater than or equal to 1960
  // and less than 1970
  return year >= 1960 && year < 1970;
}


function isEvenLength(string) {
  // Use the modulus operator (%) to check if the length of the string is divisible by 2
  // If the remainder is 0, it means the length is even
  return string.length % 2 === 0;
}


function areStringsEqualCaseInsensitive(left, right) {
  // Convert both strings to lowercase and compare them
  // using the equality operator (===)
  return left.toLowerCase() === right.toLowerCase();
}


// ---------- Do not change the code below this line --------------
module.exports = {
  areValuesEqual,
  areValuesNotEqual,
  isFromThe60s,
  isEvenLength,
  areStringsEqualCaseInsensitive,
};
