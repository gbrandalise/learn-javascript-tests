function promiseFunction() {
    return new Promise(resolve => {
        setTimeout(_ => resolve('completed'), 1000);
    });
}

module.exports = promiseFunction;