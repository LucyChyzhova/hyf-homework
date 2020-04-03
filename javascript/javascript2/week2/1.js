// you would like to write a program that doubles the odd numbers in an array and throws away the even number.

let numbers = [1, 2, 3, 4];

let newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers[i] = numbers[i] * 2;
  }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]

//Rewrite the above program using map and filter don't forget to use arrow functions.

const newNumbersArray = numbers.filter(function(n) {
  return n % 2 === 0;
});

console.log(newNumbersArray);

function multByTwo(number) {
  return number * 2;
}
const multByTwoArray = newNumbersArray.map(multByTwo);
console.log(multByTwoArray);

//// OR

const newNumbersArray2 = numbers.filter(n => n % 2 === 0);
console.log(newNumbersArray2);

const multByTwoArray2 = newNumbersArray2.map(number => number * 2);
console.log(multByTwoArray2);
