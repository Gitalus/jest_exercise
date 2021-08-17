// importo la funcion desde app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});

test("1.2 dollars should be 127.9 yens", function () {
    expect(fromDollarToYen(4.5)).toBe(479.625); // 4.5 dolares son 3.75 euros, y 3.75 euros deberían ser = (3.75 * 127.9)
});

test("127.9 yens should be 0.8 pounds", function () {
    expect(fromYenToPound(767.4)).toBe(4.8); // 767.4 yens son 6 euros, y 6 euros deberían ser (6 * 0.8) pounds
})