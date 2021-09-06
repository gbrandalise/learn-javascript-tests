const promiseFunction = require('./promise');

test('promise function returns correct value', () => {
    return promiseFunction().then(data => {
        expect(data).toBe('completed');
    });
});

test('promise function assertion using resolves operator', () => {
    return expect(promiseFunction()).resolves.toBe('completed');
});