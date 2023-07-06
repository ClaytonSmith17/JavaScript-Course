// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

// Returns the length of the passed string
function getLength(str) {
  return str.length;
}

// Returns the first and last names with a space between them
function putNamesTogether(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Returns the passed string with its first letter capitalized
function capitaliseString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Returns the passed sentence (IN ALL CAPS) in lowercase, keeping the first character capitalized
function dontShoutSentence(SENTENCE) {
  return SENTENCE.charAt(0) + SENTENCE.slice(1).toLowerCase();
}

// Returns the middle (or middle two) character(s) of the passed string
function getMiddle(str) {
  const middleIndex = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    return str.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return str.charAt(middleIndex);
  }
}

// Returns the last word of a sentence
function getLastWord(words) {
  const wordArray = words.split(' ');
  return wordArray[wordArray.length - 1];
}

// Returns the passed string with the spaces replaced by hyphens ("-")
function hyphenateWords(words) {
  return words.split(' ').join('-');
}

// Converts the passed string of space-separated words to camel case
// Camel case looks like this --> camelCaseLooksLikeThis
function convertToCamelCase(words) {
  const wordArray = words.split(' ');
  const camelCaseWords = wordArray.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });
  return camelCaseWords.join('');
}

// Checks if the password meets the criteria:
// - Includes 'n' and 'c' (upper or lowercase)
// - Ends with '1'
// Returns 'valid' if the password is valid, 'invalid' otherwise
function passwordValidation(password) {
  const lowercasePassword = password.toLowerCase();
  if (lowercasePassword.includes('n') && lowercasePassword.includes('c') && password.endsWith('1')) {
    return 'valid';
  } else {
    return 'invalid';
  }
  /*

  Northcoders takes security very seriously. We have a VERY robust password criteria. 

  Any password must include 'n' and 'c' (upper or lowercase) and must end with '1'.
  
  You need to design this function to check the password it is passed. If it fits all of the above criteria then you should return 'valid' else return 'invalid'.

*/
}

// ---------- Do not change the code below this line --------------
module.exports = {
  getLength,
  putNamesTogether,
  capitaliseString,
  dontShoutSentence,
  getMiddle,
  getLastWord,
  hyphenateWords,
  convertToCamelCase,
  passwordValidation,
};
