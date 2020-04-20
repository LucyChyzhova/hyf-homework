let todoList = [];
let name;
let action;

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

function getMyName(whatIsMyName, nameFromArray) {
  if (whatIsMyName.includes("What is my name")) {
    return nameFromArray;
  }
}

//Add fishing to my todo
function getActionFromCommand(firstWord, destination, command) {
  const action = command
    .replace(firstWord, "")
    .replace(destination, "")
    .replace("my todo list", "");
  return action;
}

function addTask(todoList, task) {
  todoList.push(task);
}

function removeTask(todoList, task) {
  const taskIndex = todoList.indexOf(task);
  if (taskIndex > -1) {
    todoList.splice(taskIndex, 1);
  }
}

//What day is it today? - Should respond with the date in a human readable format.
//E.g. if today is 30/8/2019 then it should respond with 30. of August 2019
function getTodayDate() {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  let today = new Date();
  return "Today is " + today.getDate() + " of " + monthNames[today.getMonth()] + " " + today.getFullYear();
}




//simple math
function getArrayFromMathString(mathString) {
  let mathArrayFromString = mathString.split(" ");
  return mathArrayFromString;
}

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




//Set a timer for 4 minutes

const timer = function () {
  console.log("Timer is done");
};

function getReply(command) {
  if (command.startsWith("Hello! my name is")) {
    name = getNameFromArray(getArrayFromString(command));
    return name;
  } else if (command === "What is on my todo?") {
    let response =
      "You have " +
      todoList.length +
      " todos - " +
      todoList[0] +
      "and" +
      todoList[1];
    return response;
  } else if (command === "What is my name") {
    return getMyName(command, name);
  } else if (command.startsWith("What is")) {
    const mathArray = getArrayFromMathString(command);
    const mathResult = getMathNumbers(mathArray);
    return mathResult;
  } else if (command.startsWith("Add")) {
    action = getActionFromCommand("Add", "to", command);
    addTask(todoList, action);
    return action;
  } else if (command.startsWith("Remove")) {
    action = getActionFromCommand("Remove", "from", command);
    removeTask(todoList, action);
    return action;
  } else if (command === "What day is it today?") {
    let response = getTodayDate();
    return response;
  }
  else if (command === "Set timer for 4 minutes") {
    const response = "Timer is set for 4 minutes";
    setTimeout(timer, 40000);
    return response;
  }
}

console.log("Nice to meet you " + getReply("Hello! my name is Lucy"));

console.log("Your name is " + getReply("What is my name"));

console.log(getReply("Add fishing to my todo list") + "was added to your Todo list");

console.log(getReply("Add singing in the shower to my todo list") + "was added to your Todo list");

console.log(getReply("What is on my todo?"));

console.log(getReply("Remove fishing from my todo list") + "was added to your Todo list");

console.log(getReply("What day is it today?"));

console.log(getReply("What is 3 + 3"));

console.log(getReply("Set timer for 4 minutes"));
 