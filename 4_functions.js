"use strict";
exports.__esModule = true;
function sumOfTwo(a, b) {
    return a + b;
}
function toUperCase(str) {
    return str.trim().toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, "default": "hello world" };
    }
    if (a && b) {
        return { x: a, y: b };
    }
}
console.log("Empty", position());
console.log("One", position(42));
console.log("Two", position(10, 15));
