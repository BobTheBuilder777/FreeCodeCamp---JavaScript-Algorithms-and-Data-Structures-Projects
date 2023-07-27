function palindrome(str) {
// remove all whitespaces \s, non-word characters \W , underscores _, and convert string to lower cases
var regex = /[\W\s_]*/g;
var lowerCase = str.toLowerCase().replace(regex, "");
// Initialize an empty string to store the inverted second half in
var secHalf = ""
// check if string has an even or odd number of characters. 
// if even, split the string in half, invert the characters of the second half, 
if (lowerCase.length % 2 == 0){
  // ending index is n/2 where n is the length of the string.
  let end = lowerCase.length/2;
  // starting index is n/2 + 1 where n is the length of the string.
  let start = lowerCase.length - 1;
  // loop through the second half of the string, invert and add to empty string
  for (let i = start; i >= end; i--){
    secHalf = secHalf + lowerCase[i];
  }  
  // store the first half of the string for comparison
  var firHalf = lowerCase.slice(0, end)
}
// if odd, split the string in half starting from n + 1 index where n is the index of the center character 
else{
  // ending index is n/2 where n is the length of the string.
  let end = (lowerCase.length + 1) /2;
  // starting index is n/2 + 1 where n is the length of the string.
  let start = lowerCase.length - 1;
  // loop through the second half of the string, invert and add to empty string
  for (let i = start; i >= end; i--){
    secHalf = secHalf + lowerCase[i];
  }  
  // store the first half of the string for comparison
  var firHalf = lowerCase.slice(0, end - 1)
}
// compare the second half to the first half and return true or false
let compare = firHalf === secHalf;

  return compare;
}

// console.log(palindrome("eye"));
console.log(palindrome("A man, a plan, a canal. Panama"));
//console.log(palindrome("never odd or even"));