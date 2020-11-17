const Potion = require('../Potion.js');

test('creates a health potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expec(potion.value).toEqual(expect.any(Number));
});