function receivesAFunction(callback) {
    callback();
}



function returnsANamedFunction() {
    return function namedFunction() {
        console.log('I\'m a function!')
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('I\'m an anonymous function!')
    }
}