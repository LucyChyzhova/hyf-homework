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

const DAYS_IN_YEAR = 365.2425;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const averageLifeDurationInYears = 80;

function getPercentageOfLifeTimeForTvSeries(tvSeries) {
  let tvSeriesDurationInMinutes = getSeriesDurationInMinutes(tvSeries);
  let avarageLifeDurationInMinutes = averageLifeDurationInYears * DAYS_IN_YEAR * HOURS_IN_DAY * MINUTES_IN_HOUR;
  let percentageOfLifeTimeForTvSeries = calculatePercentageOfLifeTimeForTvSeries(tvSeriesDurationInMinutes, avarageLifeDurationInMinutes);

  return percentageOfLifeTimeForTvSeries;
}

function getSeriesDurationInMinutes(tvSeries) { 
  const tvSeriesInMinutes = (tvSeries.days * HOURS_IN_DAY + tvSeries.hours) * MINUTES_IN_HOUR + tvSeries.minutes;
  
  return tvSeriesInMinutes;
}

function calculatePercentageOfLifeTimeForTvSeries(tvSeriesDurationInMinutes, avarageLifeDurationInMinutes)
{
  let percentageOfLifeTime = (tvSeriesDurationInMinutes * 100)/avarageLifeDurationInMinutes;
  
  return percentageOfLifeTime;
}

for (i = 0; i < seriesDurations.length; i++){
  let percentageOfLifeTimeForTvSeries = getPercentageOfLifeTimeForTvSeries(seriesDurations[i]);
  console.log(seriesDurations[i].title + ' took ' + percentageOfLifeTimeForTvSeries.toFixed(3) + '% of my life');
}

