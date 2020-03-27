let keyWordName = "name";
//hello my name is Kate
let stringName = "Hello! my name is Kate";
const arrayFromStringName = getArrayFromString(stringName);
console.log(arrayFromStringName);
const nameFromArray = getNameFromArray(arrayFromStringName);
console.log("Nice to meet you " + nameFromArray);

function getArrayFromString(stringName) {
  let arrayFromString = stringName.split(" ");
  return arrayFromString;
}
//take 2 world after keyWordName
function getNameFromArray(arrayFromStringName) {
  for (i = 0; i < arrayFromStringName.length; i++) {
    if (arrayFromStringName[i] === "name") {
      return arrayFromStringName[i + 2];
    }
  }
}
const whatIsMyName = "What is my name";
const answerMyName = getMyName(whatIsMyName, nameFromArray);
console.log("Your name is " + answerMyName);

function getMyName(whatIsMyName, nameFromArray) {
  if (whatIsMyName.includes("What is my name")) {
    return nameFromArray;
  }
}

//Add fishing to my todo

let todoList = [];

addTask(todoList, "fishing");
addTask(todoList, "singing in the shower");
removeTask(todoList, "fishing");
console.log("My todo list: " + todoList);

function addTask(todoList, task) {
  todoList.push(task);
  const responseMessage = task + " added to your todo";
  console.log(responseMessage);
}
function removeTask(todoList, task) {
  const taskIndex = todoList.indexOf(task);
  if (taskIndex > -1) {
    todoList.splice(taskIndex, 1);
  }
  const responseMessage = task + " was deleted from your todo";
  console.log(responseMessage);
}

//What day is it today? - Should respond with the date in a human readable format.
//E.g. if today is 30/8/2019 then it should respond with 30. of August 2019
let today = new Date();
let currentMonth = myFunction();
let year = today.getFullYear();

let day = today.getDate();
console.log(
  "Today is " +
    today.getDate() +
    " of " +
    currentMonth +
    " " +
    today.getFullYear()
);

function myFunction() {
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  let currentMonth = month[today.getMonth()];
  console.log(currentMonth);
  return currentMonth;
}

//simple math

let mathString = "what is 3 + 6";

function getArrayFromMathString(mathString) {
  let mathArrayFromString = mathString.split(" ");
  return mathArrayFromString;
}
let mathArray = getArrayFromMathString(mathString);
console.log(mathArray);

function getMathNumbers(mathArray) {
  for (i = 0; i < mathArray.length; i++) {
    if (mathArray[i] === "+") {
      return parseInt(mathArray[i - 1]) + parseInt(mathArray[i + 1]);
    } else if (mathArray[i] === "-") {
      return parseInt(mathArray[i - 1]) - parseInt(mathArray[i + 1]);
    } else if (mathArray[i] === "*") {
      return parseInt(mathArray[i - 1]) * parseInt(mathArray[i + 1]);
    } else if (mathArray[i] === "/") {
      return parseInt(mathArray[i - 1]) / parseInt(mathArray[i + 1]);
    }
  }
}
let mathResult = getMathNumbers(mathArray);
console.log(mathResult);

//My favorite dish is lasagne - should save the user's favorite dish as lasagne.

let favoriteDish = [];

addTask(favoriteDish, "lasagne");
console.log("My list of favorite dishes: " + favoriteDish);

function addFavoriteDish(favoriteDish, dish) {
  favoriteDish.push(dish);
  const responseMessageFavoriteDish = dish + " added to your favorite dish";
  console.log(responseMessageFavoriteDish);
}

//What is my favorite dish - should respond with the favorite dish

const whatIsMyFavoriteDish = "What is my favorite dish";
const answerMyFavoriyeDish = getFavoriteDish(
  favoriteDish,
  whatIsMyFavoriteDish
);
console.log("Your favorite dish is " + answerMyFavoriyeDish);

function getFavoriteDish(dishList, question) {
  if (question.includes("What is my favorite dish")) {
    return dishList;
  }
}

//Set a timer for 4 minutes

function myFunction() {
  const fourMinutes = 1000 * 60 * 4;
  setTimeout(function() {
    console.log("Timer done");
  }, fourMinutes);
}

const timeCommand = "Set a timer for 4 minutes";
const timeAnswer = "Timer set for 4 minutes";
const setMinutes = toSetMinutes(timeCommand, timeAnswer);
console.log(setMinutes);
function toSetMinutes(timeCommand, timeAnswer) {
  if (timeCommand.includes("Set a timer for 4 minutes")) {
    return timeAnswer;
  }
}

//Add Bike ride the 3/5/2019 to my calendar

let events = [];
const request = "Add Bike ride on 3/5/2019 to my calendar";
const respond = "Bike ride added to your calendar";

function findWordIndex(word) {
  let wordPosition = request.indexOf(word);
  return wordPosition;
}
let findAddPosition = findWordIndex("Add");
console.log(findAddPosition);
findOnPosition = findWordIndex("on");
console.log(findOnPosition);
findToPosition = findWordIndex("to");
console.log(findToPosition);

function getEventPosition() {
  let eventPosition = request.substring(findAddPosition + 4, findOnPosition);
  return eventPosition;
}
let event = getEventPosition();
console.log(event + " was added to your calendar");

function getDatePosition() {
  let datePosition = request.substring(findOnPosition + 3, findToPosition);
  return datePosition;
}
let date = getDatePosition();
console.log(date);

//object
let calendar = { name: event, date: date };
console.log(calendar);

//array
function pushEvent() {
  events.push(calendar);
  return events;
}
let updatedEventList = pushEvent();
console.log(updatedEventList);

//What am I doing this week? 

const weekDuties = "What am I doing this week?";

function getWeekDuties(event, weekDuties) {
  if (weekDuties.includes("What am I doing this week")) {
    return event;
  }
}
let myWeekDuties = getWeekDuties(event, weekDuties);
console.log("This week you have 1 event: " + myWeekDuties + "on " + date);

// what day?
const dateNowQuestion = "What day and time";

function getDateNow(dateNowQuestion) {
  let dt = new Date();
  if (dateNowQuestion.includes("What day and time")) {
    return dt;
  }
}
let dateNow = getDateNow(dateNowQuestion);
console.log("Today is: " + dateNow);
