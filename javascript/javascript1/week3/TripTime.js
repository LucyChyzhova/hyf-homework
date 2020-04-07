//When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432
};



//Time = Distance ÷ Speed
function getTimeOfTrip(travelInformation) {
  let time = travelInformation.destinationDistance / travelInformation.speed * 60;

  return time;
}


function timeConvert(timeInMinutes) {
  let fractionalHours = timeInMinutes / 60;
  let hours = Math.floor(fractionalHours);
  let fractionalMinutes = (fractionalHours - hours) * 60;
  let minutes = Math.round(fractionalMinutes);
  let hoursAndMinutes = {hours: hours, minutes: minutes};
  //let hoursAndMinutes = 

  return hoursAndMinutes;
}

const travelTimeInMinutes = getTimeOfTrip(travelInformation);
console.log("InMinutes:" + travelTimeInMinutes); 

let hoursAndMinutes = timeConvert(travelTimeInMinutes);
console.log(hoursAndMinutes.hours + " hour(s) and " + hoursAndMinutes.minutes + " minute(s).");

