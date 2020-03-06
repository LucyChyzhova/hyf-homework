

//---------------Main CODE---------------------------------
const daysCount = 8;

console.log('Event will be in ' + daysCount +' days');

let eventWeekDay = getEventWeekday(daysCount);

console.log('Event will be on ' + eventWeekDay);
//----------------------------------------------------------

function getEventWeekday(numberOfDays) {
    let currentWeekDay = getCurrentWeekDay();

    let weekDays = ['Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];    
    
    let weekDayNumber = getWeekDayNumber(currentWeekDay, numberOfDays); 

    let weekDay = weekDays[weekDayNumber - 1];

    return weekDay;
}

function getCurrentWeekDay() {
    let currentDate = new Date();

    let currentWeekDay = currentDate.getDay();

    console.log('today is ' + currentWeekDay + 'th' + ' day of the week');
    
    return currentWeekDay;   
}

function getWeekDayNumber(currentWeekDay, numberOfDays){
    let weekDayNumber;

    if (numberOfDays <= 7) {
        weekDayNumber = currentWeekDay + numberOfDays;
    }
    else
    {
        weekDayNumber = currentWeekDay + numberOfDays % 7;
    }

    return weekDayNumber;
}

