function asynFunction(callback) {
    setTimeout(() => callback('completed'), 1000);
}

module.exports = asynFunction;