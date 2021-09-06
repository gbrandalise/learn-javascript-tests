const asyncFunction = require('./async');

test('mocking callback function', done => {
    const mockCallback = jest.fn(data => {
        console.log(data); 
        expect(mockCallback.mock.calls.length).toBe(1);
        done();
    });
    asyncFunction(mockCallback);
});