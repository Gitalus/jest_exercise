module.exports = { fromYenToPound, sum, fromDollarToYen, fromEuroToDollar };

function sum(a, b) {
    return a + b;
}

let oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8
}

function fromDollarToYen (dollars) {
    let euros_from_dollars = dollars/oneEuroIs.USD;
    return euros_from_dollars * oneEuroIs.JPY;
}

function fromEuroToDollar (euros) {
    return euros * oneEuroIs.USD;
}

function fromYenToPound (yens) {
    let euros_from_yens = yens/oneEuroIs.JPY;
    return euros_from_yens * oneEuroIs.GBP;
}