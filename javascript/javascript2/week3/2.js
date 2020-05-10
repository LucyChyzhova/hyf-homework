//2. Create a function that takes 2 parameters

function showLater(stringToLog, delay) {
    setTimeout(function () {
        console.log(stringToLog);
    }, delay)
}

showLater("Task2: This string logged after 3 sec", 3000);
showLater("Task2: This string logged after 6 sec", 6000)

