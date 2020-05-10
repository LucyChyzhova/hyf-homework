//1. Log out the text Called after 2.5 seconds
const lateFunction = function () {
  console.log("Task1: I'm late on 2.5 sec");
};
setTimeout(lateFunction, 2500);
