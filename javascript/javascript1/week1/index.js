//Age-ify (A future age calculator)
let yearOfBirth = 1989;
let yearFuture = 2027;

let age = yearFuture - yearOfBirth;

console.log(age)
console.log("You will be " + age + " years old in " + yearFuture + ".")

//Goodboy-Oldboy (A dog age calculator)
let dogYearOfBirth;
dogYearOfBirth = 2019;
let dogYearFuture;
dogYearFuture = 2027;
let dogYear;

let dogAge = dogYearFuture - dogYearOfBirth; 

let shouldShowResultInDogYears = true;
if(shouldShowResultInDogYears) {
dogYear = dogAge * 7;
} else {
dogYear = dogAge;
}
console.log(dogYear)
console.log("Your dog will be " + dogAge + " human years old in " + dogYearFuture);
console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture);

//Housey pricey (A house price estimator)
//Peter
let houseWide = 8;
let houseDeep = 10;
let houseHigh = 10;
let gardenSizeInM2 = 100;
let houseCosts = 2500000;
let comparison;
let volumeInMeters = houseWide * houseDeep * houseHigh;

console.log(volumeInMeters +"m");

let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (housePrice > houseCosts){
    comparison = 'too much'
}
else {
    comparison = 'cheaper'
}

console.log("Peter's house costs " + housePrice + "." + " House costs " + comparison + " compared with the original price")

//Julia

 houseWide = 5;
 houseDeep = 11;
 houseHigh = 8;
 gardenSizeInM2 = 70;
 houseCosts = 1000000;
 volumeInMeters = houseWide * houseDeep * houseHigh;

console.log(volumeInMeters +"m");

let JuliaHousePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (housePrice > houseCosts){
    comparison = 'too much'
}
else {
    comparison = 'cheaper'
}

console.log("Julia's house costs " + JuliaHousePrice + "." + " House costs " + comparison + " compared with the original price")


//Ez Namey (Startup name generator)

let firstWords = ['Easy', 'Awesome', 'Corporate', 'Incredible', 'Simple', 'Bright', 'Funny', 'Sustainable', 'Famouse', 'Great']
let secondWords = ['story', 'choise', 'identity', 'friends', 'family', 'forces', 'natura', 'history', 'idea', 'sign']

const randomNumber = Math.floor(Math.random() * 10) + 0
let companyFirstWorld = firstWords [randomNumber]
let companySecondWorld = secondWords [randomNumber]
let startupName = companyFirstWorld + " " + companySecondWorld
let characters = startupName.length
console.log("The startup name: " + '"' + startupName + '"' + " contains " + characters + " characters")
