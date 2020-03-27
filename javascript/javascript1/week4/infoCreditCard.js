//Credit card info

let number = '4781321334789876';

function GetCardType(number)
{
    // visa
    let regularExp = new RegExp("^4");
    if (number.match(regularExp) != null)
        return "Visa";

    // Mastercard
    regularExp = new RegExp("^5[1-5]");
    if (number.match(regularExp) != null)
        return "Mastercard";

    // Visa Electron
    regularExp = new RegExp("^(4026|417500|4508|4844|491(3|7))");
    if (number.match(regularExp) != null)
        return "Visa Electron";

    return "";
}

let crC = GetCardType(number)
console.log(crC)