//-------------------------------------------------------------------

let currentTemperature = 9;
console.log('today is ' + currentTemperature +'C ' + 'outside')

let clothes = getClothes(currentTemperature)
console.log('Based on the temperature you should be wearing ' + clothes)


//-------------------------------------------------------------------

function getClothes(currentTemperature, location) {
    let clothes;

    if (currentTemperature >= 17) {
        clothes = 't-shirt, sandals and cap';
    }
    else if (currentTemperature >= 10) {
        clothes = 'pullover';
    }

    else if (currentTemperature >= 0){
        clothes = 'coat, hat and boots';

    }
    else {
        clothes = 'too cold, parka and snow boots can help';
    }

    return clothes
}
 