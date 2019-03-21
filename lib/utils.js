"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specials = "?:;\'$*\=+,!.`~\"%^/#@|&";
exports.charsLowerCase = "abcdefghijklmnopqrstuvwxyz";
exports.charsUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
exports.charsNumber = "1234567890";
/**
* Shuffle array values using Fisher-Yates algorithm
*
* @param {Array} array Source array
*
* @returns {Array} Shuffled array
*/
exports.shuffle = function (array) {
    var i = array.length;
    while (i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};
exports.upperChar = function () {
    return exports.charFrom(exports.charsUpperCase);
};
exports.lowerChar = function () {
    return exports.charFrom(exports.charsLowerCase);
};
exports.anyChar = function (key) {
    if (key === 'lowers') {
        return exports.charFrom(exports.charsLowerCase);
    }
    if (key === 'uppers') {
        return exports.charFrom(exports.charsUpperCase);
    }
    // if (key === 'specials') {
    //   return charFrom(specials);
    // }
    return exports.charFrom(exports.charsNumber);
};
exports.special = function () {
    return exports.charFrom(exports.specials);
};
exports.charFrom = function (chars) {
    return chars.charAt(exports.random(chars.length - 1));
};
exports.random = function (max, min) {
    if (min === void 0) { min = 0; }
    return Math.floor(Math.random() * (max - min + 1) + min);
};
