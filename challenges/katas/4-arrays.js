// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function getEvenNumbers(nums) {
  return nums.filter(num => num % 2 === 0);
  //return an array of only the even numbers in the given array
}

function getItemsLongerThan(array, len) {
  return array.filter(item => item.length > len);
  //return an array of only the items longer than the given length
}

function getLastItems(array, n) {
  return array.slice(-n);
  // return an array with the 'n' last items of 'array'
}

function getSandwichFilling(sandwich) {
  if (sandwich.length >= 3) {
    return sandwich.slice(1, -1);
  } else {
    return [];
  }
  // if an array is a sandwich, the first and last items are the bread, return an array with the filling of the sandwich
}

function removeItem(array, n) {
  return array.filter((_, index) => index !== n);
  // return a new array without the item on position 'n', effectively removing it from the array
}

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
  // return a new array with all the elements of arr1 followed by all the elements of arr2
}

function flattenArrayByOne(arrayOfArrays) {
  return [].concat(...arrayOfArrays);
  /* given a nested array or arrays, return a new array with one less level of nesting. All the elements of all the original nested arrays must be kept in their original order
  for example: [[1],[2],[[3,4]]] => [1,2,[3,4]]
  */
}

function isItemOmnipresent(arrayOfArrays, item) {
  return arrayOfArrays.every(array => array.includes(item));
  // return true if the passed item is present in all the arrays inside arrayOfArrays
}

// ---------- Do not change the code below this line --------------
module.exports = {
  getEvenNumbers,
  getItemsLongerThan,
  getLastItems,
  getSandwichFilling,
  removeItem,
  mergeArrays,
  flattenArrayByOne,
  isItemOmnipresent,
};
