// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

// This function calculates the remainder of dividing 'a' by 'b'.
function modulo(a, b) {
  // The modulus operator % calculates the remainder of 'a' divided by 'b'.
  return a % b;
  // return the remainder of the division a / b
}


// This function calculates the square root of a given number 'n'.
function squareRoot(n) {
  // The Math.sqrt() function is used to calculate the square root of 'n'.
  return Math.sqrt(n);
  // Return the square root of 'n'.
} 


// This function raises a given number 'm' to the power of 'n'.
function raiseToPower(m, n) {
  // The Math.pow() function is used to raise 'm' to the power of 'n'.
  return Math.pow(m, n);
  // Return the result of raising 'm' to the nth power.
}


// This function formats a given amount into pounds sterling.
function formatMoney(amount) {
  // The toFixed() method is used to round the 'amount' to 2 decimal places and convert it to a string.
  // The "£" symbol is concatenated with the formatted amount using the string concatenation operator (+).
  return "£" + amount.toFixed(2);
  /*
   * Return the 'amount' formatted into pounds sterling.
   * Amounts should be represented as a string with the "£" symbol in front.
   * Example: formatMoney(2.33) => "£2.33"
   * Amounts should be rounded to 2 decimal places.
   * Example: formatMoney(2.338) => "£2.34"
   * Amounts should always have 2 decimal places, even if they are zeroes.
   * Example: formatMoney(1) => "£1.00"
   */
}


// This function calculates the area of a circle with a given radius 'r'.
function calculateCircleArea(r) {
  // The Math.PI constant represents the value of pi.
  // The Math.pow() function is used to calculate 'r' raised to the power of 2.
  // The result is multiplied by pi to get the area of the circle.
  const area = Math.PI * Math.pow(r, 2);
  // The toFixed() method is used to round the 'area' to 3 decimal places and convert it to a string.
  return area.toFixed(3);
  // Return the area of the circle rounded to 3 decimal places.
}


// This function calculates the number of full turns that can be made with the provided degrees.
function calculateFullTurns(degrees) {
  // The 'degrees' value is divided by 360 to determine the number of full turns.
  const fullTurns = degrees / 360;
  // The Math.floor() function is used to round down the 'fullTurns' to the nearest whole number.
  return Math.floor(fullTurns);
  // Return the number of full turns that can be made with the provided degrees.
}


// This function finds the smallest and biggest values in a given array.
function findSmallestAndBiggest(arr) {
  // The spread operator (...) is used to expand the elements of the 'arr' array.
  // The Math.min() function is used to find the smallest value among the expanded elements.
  const smallest = Math.min(...arr);
  
  // The spread operator (...) is used again to expand the elements of the 'arr' array.
  // The Math.max() function is used to find the biggest value among the expanded elements.
  const biggest = Math.max(...arr);
  
  // The smallest and biggest values are returned as an array.
  return [smallest, biggest];
  // Return a new array containing the smallest and biggest values of the original array.
}


// This function splits the total cost of a coffee order among a given number of people.
function splitTheBeans(totalCost, numOfPeople) {
  // The total cost is divided by the number of people to get the cost per person.
  // The result is rounded to the nearest whole pound using the Math.round() function.
  const costPerPerson = Math.round(totalCost / numOfPeople);
  
  // The cost per person is returned.
  return costPerPerson;

  /*
  The Northcoders staff have gone for a coffee run and they are all bad at maths. 
  
  You are given the total cost of the coffee order (in pounds) and the number of people the cost needs to be split between.

  Return the cost per person.

  Note: The Northcoders staff only have whole pound coins. So the cost per person needs to be to the nearest pound coin (we'll give it as a tip!).

  */
}


// ---------- Do not change the code below this line --------------
module.exports = {
  modulo,
  squareRoot,
  raiseToPower,
  formatMoney,
  calculateCircleArea,
  calculateFullTurns,
  findSmallestAndBiggest,
  splitTheBeans,
};
