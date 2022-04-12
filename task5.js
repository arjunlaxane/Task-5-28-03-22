'use strict';

/*
Q.1.
Do the below programs in anonymous function & IIFE
Print odd numbers in an array
Convert all the strings to title caps in a string array
Sum of all numbers in an array
Return all the prime numbers in an array
Return all the palindromes in an array
Return median of two sorted arrays of the same size
Remove duplicates from an array
Rotate an array by k times
*/
//1.print odd numbers in an array

var arr1 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

(function (arr1) {
  for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    if (element % 2 === 1) {
      console.log(element);
    }
  }
})(arr1);

//2.Convert all the strings to title caps in a string array

var arr2 = ['Arjun', 'tanmay', 'ashish', 'nuPUr', 'shaurya', 'ridhima'];
(function (arr2) {
  for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];

    console.log(element.toUpperCase());
    console.log(element.toLowerCase());
  }
})(arr2);

//3.Sum of all numbers in an array
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function (arr3) {
  let sum = 0;
  for (let index = 0; index < arr3.length; index++) {
    sum += arr3[index];
  }
  console.log(sum);
})(arr3);

//4.Return all the prime numbers in an array

var arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function (arr4) {
  let flag;
  for (let index = 0; index < arr4.length; index++) {
    if (arr4[index] === 1) {
      continue;
    }
    flag = true;
    for (let start = 2; start < arr4[index] - 1; start++) {
      if (arr4[index] % start === 0) {
        flag = false;
        break;
      }
    }

    if (flag === true) {
      console.log(arr4[index]);
    }
  }
})(arr4);

//5.Return all the palindromes in an array

var arr5 = [
  'Nitin',
  'arjun',
  'ashish',
  'abba',
  'Madam',
  'civic',
  'Bob',
  123454321,
  1234567891122,
];
var flag;
(function (arr5) {
  // get the total length of the words

  for (let index = 0; index < arr5.length; index++) {
    let element = arr5[index];

    const len = element.length;

    if (typeof arr5[index] === 'string') {
      flag = true;
      // Use for loop to divide the words into 2 half
      for (let i = 0; i < len / 2; i++) {
        // validate the first and last characters are same
        if (element[i].toUpperCase() !== element[len - 1 - i].toUpperCase()) {
          flag = false;
          break;
        }
      }
      if (flag === true) {
        console.log(element);
      }
    } else {
      let rem;
      let rev = 0;

      while (element > 0) {
        // while(element !==0)
        rem = element % 10;
        rev = rev * 10 + rem;
        element = parseInt(element / 10);
      }

      if (rev === arr5[index]) {
        console.log(arr5[index]);
      }
    }
  }
})(arr5);

//6.Return median of two sorted arrays of the same size

var arr6 = [12, 45, 89, 47, 65, 89];
var arrr6 = [14, 41, 52, 25, 101, 24, 46];

let ans1 = arr6.concat(arrr6).sort((a, b) => {
  return a - b;
});

if (ans1.length % 2 === 1) {
  var result = ans1[Math.floor(ans1.length / 2)];
} else {
  var result = (ans1[ans1.length / 2 - 1] + ans1[ans1.length / 2 - 1 + 1]) / 2;
}
console.log(result);

//7.Remove duplicates from an array

var arr7 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 7, 8, 9, 9, 8, 10];

(function (arr7) {
  let newArr = [];
  let visitedArray = Array.from({ length: arr7.length }, (i, j) => false);

  let count;

  for (let i = 0; i < arr7.length; i++) {
    if (visitedArray[i] === true) {
      continue;
    }
    count = 1;
    for (let j = i + 1; j < arr7.length; j++) {
      if (arr7[i] === arr7[j]) {
        visitedArray[j] = true;
        count++;
      }
    }
    //console.log(count);

    if (count === 1) {
      newArr.push(arr7[i]);
    }
  }

  console.log(newArr);
})(arr7);

//8.Rotate an array by k times

//Rotate k times to left

var arr8 = [1, 2, 3, 4, 5, 6, 7];
(function (arr8, k) {
  let arr = [];
  for (let index = 0; index < arr8.length; index++) {
    arr[index] = arr8[(index + k) % arr8.length];
  }
  console.log(arr);
})(arr8, 2); //ans:[ 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 ]

/*
Q.3
Do the below programs in arrow functions
Print odd numbers in an array
Convert all the strings to title caps in a string array
Sum of all numbers in an array
Return all the prime numbers in an array
Return all the palindromes in an array


*/

//1.Print odd numbers in an array

var arr1 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const ans = arr1 => {
  for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    if (element % 2 === 1) {
      console.log(element);
    }
  }
};

ans(arr1);

//2.Convert all the strings to title caps in a string array

var arr2 = ['Arjun', 'tanmay', 'ashish', 'nuPUr', 'shaurya', 'ridhima'];

const title_Caps = arr2 => {
  for (let index = 0; index < arr2.length; index++) {
    var element = arr2[index];
    console.log(element.toUpperCase());
    console.log(element.toLowerCase());
  }
};
title_Caps(arr2);

//3.Sum of all numbers in an array

var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfAll = arr3 => {
  var sum = 0;
  for (let index = 0; index < arr3.length; index++) {
    sum += arr3[index];
  }
  return sum;
};
console.log(sumOfAll(arr3));

//4.Return all the prime numbers in an array

var arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isItPrimeNumber = arr4 => {
  let flag;
  for (let index = 0; index < arr4.length; index++) {
    if (arr4[index] === 1) {
      continue;
    }

    flag = true;
    for (let start = 2; start < arr4[index]; start++) {
      if (arr4[index] % start === 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      console.log(arr4[index]);
    }
  }
};
isItPrimeNumber(arr4);

//5.Return all the palindromes in an array

var arr5 = [
  'Nitin',
  'arjun',
  'ashish',
  'abba',
  'Madam',
  'civic',
  'Bob',
  123454321,
  1234567891122,
];
var flag;
function validatePalin(arr5) {
  // get the total length of the words

  for (let index = 0; index < arr5.length; index++) {
    let element = arr5[index];

    const len = element.length;

    if (typeof arr5[index] === 'string') {
      flag = true;
      // Use for loop to divide the words into 2 half
      for (let i = 0; i < len / 2; i++) {
        // validate the first and last characters are same
        if (element[i].toUpperCase() !== element[len - 1 - i].toUpperCase()) {
          flag = false;
          break;
        }
      }
      if (flag === true) {
        console.log(element);
      }
    } else {
      let rem;
      let rev = 0;

      while (element > 0) {
        // while(element !==0)
        rem = element % 10;
        rev = rev * 10 + rem;
        element = parseInt(element / 10);
      }

      if (rev === arr5[index]) {
        console.log(arr5[index]);
      }
    }
  }
}
validatePalin(arr5);
