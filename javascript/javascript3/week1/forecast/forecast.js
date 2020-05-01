/*Create a javascript file and an html file and import the javascript file in the html file.

Fetch weather json data from the api using a city a user has specified: Add an input element and a button to the html. When the button is 
clicked,get the text from the input (which should be a city name) and fetch the relevant weather data from that city.
Remember to show some loading text. What if a user writes nothing in the input?*/

/*Display the data
This data should be showed in your app:

The chosen city
Temperature
Icon for the weather type
Wind speed
How clowdy it is
When sunrise and sunset is*/

let isImperial = false;

const fetchWeatherForecastByCity = (cityName) => {
  if (cityName != "") {
    let loader = `<p class="loading"> loading... </p>`;
    currentCity.innerHTML = loader;
    const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0cc227774355cd7f0b765119e84507e1`;
    //console.log('cityUrl', cityUrl)

    fetch(cityUrl)
      .then((response) => response.json())
      .then((result) => {
        //console.log(result.name)
        console.log("it got a result", result);

        const city = result.name;
        console.log("city", city);

        const temperature = result.main.temp;
        console.log("temperature", temperature);

        const windSpeed = result.wind.speed;
        console.log("wind speed", windSpeed);

        const icon = result.weather[0].icon;
        console.log("weather type", icon);

        const cloudy = result.weather[0].description;
        console.log("weather type", cloudy);

        const sunrise = result.sys.sunrise;
        console.log("sunrise", sunrise);

        const sunset = result.sys.sunset;
        console.log("sunset", sunset);

        let sunriseTime = convertMilisecondsToTime(sunrise);
        let sunsetTime = convertMilisecondsToTime(sunset);

        const output = renderForecast(
          city,
          icon,
          temperature,
          cloudy,
          windSpeed,
          sunriseTime,
          sunsetTime,
          isImperial
        );
        currentCity.innerHTML = output;
      });
  } else {
    output = `
    <p id="error"> Please add a city name</p>`;
    currentCity.innerHTML = output;
  }
};

function renderForecast(city, icon, temperature, cloudy, windSpeed, sunriseTime, sunsetTime, isImperial) 
{
  const temp = isImperial
    ? `<p class="t imperial">${Math.trunc(((temperature - 273.15) * 9) / 5 + 32)} &#176;F</p>`
    : `<p class="t metric">${Math.trunc(temperature - 273.15)} &#176;C</p>`;

  return `
    <h1> ${city} </h1>
    <div class="weather-description">
    <img class="wether-icon" src='http://openweathermap.org/img/wn/${icon}.png'></img>
    ${temp}
    </div>
    <div class="sun-description">
    <div class="cloudy-wind">
    <p>${cloudy}</p>
    <p> wind ${windSpeed} m/s</p>
    </div>
    <div class="sunrise-set">
    <p>Sunrise ${sunriseTime}</p>
    <p>Sunset  ${sunsetTime}</p>
    </div>
    </div>
  `;
}

function convertMilisecondsToTime(milliseconds) {
  const date = new Date(milliseconds * 1000);
  // Hours part from the timestamp
  const hours = date.getHours();
  // Minutes part from the timestamp
  const minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  const seconds = "0" + date.getSeconds();
  // Will display time in 10:30:23 format
  const time = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  return time;
}

const onClick = function () {
  const cityName = document.getElementById("city-name").value;
  fetchWeatherForecastByCity(cityName);
};



const onClickImperial = function () {
  isImperial = this.checked;

  onClick();
};

document.getElementById("btn").addEventListener("click", onClick);
document.getElementById("imperial").addEventListener("change", onClickImperial);