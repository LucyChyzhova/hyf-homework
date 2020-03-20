const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0
  },
  {
    title: "Friends",
    days: 6,
    hours: 15,
    minutes: 32
  }
];

const daysInYear = 365.2425;
const hoursInDay = 24;
const minutesInHour = 60;
const averageLifeDurationInYears = 80;

for (i = 0; i < seriesDurations.length; i++){
  let percentageOfLifeTimeForTvSeries = getPercentageOfLifeTimeForTvSeries(seriesDurations[i]);

  console.log(seriesDurations[i].title + " took " + percentageOfLifeTimeForTvSeries.toFixed(4) + "% of my life");
}

//----------------------------------------------------------------------

function getPercentageOfLifeTimeForTvSeries(tvSeries) {
  let tvSeriesDurationInMinutes = getSeriesDurationInMinutes(tvSeries);
  let avarageLifeDurationInMinutes = getAvarageLifeDurationInMinutes();
  let percentageOfLifeTimeForTvSeries = calculatePercentageOfLifeTimeForTvSeries(tvSeriesDurationInMinutes, avarageLifeDurationInMinutes);

  return percentageOfLifeTimeForTvSeries;
}

function getSeriesDurationInMinutes(tvSeries) { 
  const tvSeriesInMinutes =
    (tvSeries.days * hoursInDay + tvSeries.hours) * minutesInHour +
    tvSeries.minutes;

  return tvSeriesInMinutes;
}

function getAvarageLifeDurationInMinutes() {
  const averageLifeDurationInMinutes =
    averageLifeDurationInYears * daysInYear * hoursInDay * minutesInHour;

  return averageLifeDurationInMinutes;
}

function calculatePercentageOfLifeTimeForTvSeries(tvSeriesDurationInMinutes, avarageLifeDurationInMinutes)
{
    let percentageOfLifeTime = (tvSeriesDurationInMinutes * 100)/avarageLifeDurationInMinutes;

    return percentageOfLifeTime;
}
