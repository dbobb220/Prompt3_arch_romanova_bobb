'use strict';

let inputValue = "";
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let countitArray = [];

function countFunc() { 
    let inputValue = document.getElementById("input").value;
    countit(inputValue);
    document.querySelector("#output").innerHTML = returnValues(countitArray);
}



let returnValues = (arr) => {
    let returnString = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] !== '') {
        returnString += (arr[i][0] + ":" + arr[i][1]) + " ";
        }
    }
    return returnString;
}

let countit = function(array) {
  let arrayValue = array.split('');
  let count = 0;
  let key = '';
  alphabet.forEach(function(val, idx, arr) {
    for (let i = 0; i < arrayValue.length; i++) {
      if (val === arrayValue[i]) {
        count += 1;
        key = val;
      }
    }
    countitArray.push([key, count]); 
    count = 0;
    key = '';
  });
  return countitArray;
}