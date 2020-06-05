const { calculateTotalPrice } = require("./price-calculator");

test('Selling 1 item in texas', () => {
    const price = 1000
    const quantity = 1
    const state = 'TX'
    expect(  calculateTotalPrice(price,quantity,state) ).toBe(1062.5);
});


test('Selling 2 items in texas', () => {
    const price = 1000
    const quantity = 2
    const state = 'TX'
    expect(  calculateTotalPrice(price,quantity,state) ).toBe(2125);
});