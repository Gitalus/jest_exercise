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
    return dollars * oneEuroIs.JPY;
}

function fromEuroToDollar (euros) {
    return euros * oneEuroIs.USD;
}

function fromYenToPound (yens) {
    return yens * oneEuroIs.GBP;
}