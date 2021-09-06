const asyncFunction = require('./async');

test('async function returns correct value', done => {
    const callback = (data) => {
        expect(data).toBe('completed');
        done();
    }
    asyncFunction(callback);
})