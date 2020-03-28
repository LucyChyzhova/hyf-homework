const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

function getHousePricesAnalytics(housePrices) {
  //average
  let sum = housePrices.reduce((previous, current) => (current += previous));
  let average = sum / housePrices.length;
  var adaptedAverage = average.toFixed(2);

  //median
  let values = [2, 56, 3, 41, 0, 4, 100, 23];
  housePrices.sort((a, b) => a - b);
  let lowMiddle = Math.floor((housePrices.length - 1) / 2);
  let highMiddle = Math.ceil((housePrices.length - 1) / 2);
  let median = (housePrices[lowMiddle] + housePrices[highMiddle]) / 2;

  //object
  const adaptedAverageandMedian = { average: adaptedAverage, median: median };

  return adaptedAverageandMedian;
}

const housePricesAnalytics = getHousePricesAnalytics(housePrices);

const htmlElement = document.createElement("p");
htmlElement.innerText = "median: " + housePricesAnalytics.median + ", " + "average: " + housePricesAnalytics.average;
document.body.appendChild(htmlElement);
