const asyncFunction = require('./async');
const promiseFunction = require('./promise');

describe('testing all async functions', () => {
    test('async function returns correct value', done => {
        const callback = (data) => {
            expect(data).toBe('completed');
            done();
        }
        asyncFunction(callback);
    });

    test('promise function returns correct value', () => {
        return promiseFunction().then(data => {
            expect(data).toBe('completed');
        });
    });
    
    test('promise function assertion using resolves operator', () => {
        return expect(promiseFunction()).resolves.toBe('completed');
    });
})