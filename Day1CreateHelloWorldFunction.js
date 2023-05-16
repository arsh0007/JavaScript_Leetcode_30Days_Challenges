/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...arg) {
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
