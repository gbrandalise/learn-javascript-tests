const promiseFunction = require('./promise');

test('promise function returns correct value', () => {
    return promiseFunction(data => {
        expect(data).toBe('completed');
    });
});