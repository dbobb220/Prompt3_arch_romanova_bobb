'use strict';

let inputValue = "";
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let countitArray = [];
let returnString = '';

function countFunc() { 
  // clearing output DOM in case anything is in there
  document.querySelector("#output").innerHTML = '';
  returnString = '';
  countitArray = [];
  // variable for input text
  let inputValue = document.getElementById("input").value;
  // sending input through functions and adding it to DOM
  countit(inputValue);
  document.querySelector("#output").innerHTML = returnValues(countitArray);
}

let returnValues = (arr) => {
  // loop through results from countit to remove empty values
  for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] !== '') {
      returnString += 'The letter ' + '<b>' + (arr[i][0] 
        + '</b>' + " is present " + '<b>' + arr[i][1]) + '</b>' + " times. <br>";
      }
  }
  return returnString;
}

let countit = function(array) {
  // variables for input, count, and alphabet letter
  let arrayValue = array.split('');
  let count = 0;
  let key = '';
  // loop through each letter of alphabet
  alphabet.forEach(function(val, idx, arr) {
    // loop through each letter from input
    for (let i = 0; i < arrayValue.length; i++) {
      // if letter in the alphabet matches input value
      // use letter as key value and add one to the count
      if (val === arrayValue[i]) {
        count += 1;
        key = val;
      }
    }
    // once loop through input is done for a letter, add it to an array
    countitArray.push([key, count]); 
    // reset count and key to prepare it for the next letter in the alphabet
    count = 0;
    key = '';
  });
  // return final array that has empty values if letter isn't present and a key and count if letter is present
  return countitArray;
}