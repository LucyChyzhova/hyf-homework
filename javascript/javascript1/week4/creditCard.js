//Create a function that takes a number as parameter. The function should return the following object:

let num = "123456789";
let numWithGap = "";
const gapSize = 4; //Desired distance between spaces

while (num.length > 0) {
    numWithGap = numWithGap + " " + num.substring(0, gapSize); // Insert space character
  num = num.substring(gapSize); 
}

console.log(numWithGap); // "1234 5678 9"
