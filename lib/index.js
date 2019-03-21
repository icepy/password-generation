"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var defaultsConfig = {
    length: [7, 10],
    specials: 1,
    nums: 2,
    uppers: 2,
    lowers: 3
};
var splitChars = function (str) {
    var chars = str.split('');
    var total = chars.length;
    var uppers = 0;
    var lowers = 0;
    var nums = 0;
    var specials = 0;
    var sym;
    /* jshint -W084 */
    while (sym = chars.pop()) {
        /* jshint +W084 */
        if (utils_1.charsLowerCase.indexOf(sym) > -1) {
            lowers++;
        }
        else if (utils_1.charsUpperCase.indexOf(sym) > -1) {
            uppers++;
        }
        else if (!isNaN(Number(sym))) {
            nums++;
        }
        else
            specials++;
    }
    return {
        uppers: uppers,
        lowers: lowers,
        nums: nums,
        specials: specials,
        total: total
    };
};
var bonusScore = function (chars) {
    var bonus = 0;
    if (chars.lowers > 0)
        bonus += 2;
    if (chars.nums > 0)
        bonus += 2;
    if (chars.uppers > 0)
        bonus += 3;
    if (chars.specials > 0)
        bonus += 5;
    bonus += (chars.specials > 3 ? 3 : chars.specials);
    bonus += (chars.nums > 2 ? 2 : chars.nums);
    bonus += (chars.uppers > 2 ? 2 : chars.uppers);
    return bonus;
};
var score = function (password) {
    var chars = splitChars(password);
    var bonus = bonusScore(chars);
    return chars.total + bonus;
};
exports.rank = function (password) {
    var _score = score(password);
    if (_score <= 11)
        return 0;
    else if (_score < 15)
        return 1;
    else if (_score < 19)
        return 2;
    else if (_score < 23)
        return 3;
    else if (_score < 28)
        return 4;
    else
        return 5;
};
var getOptionNum = function (target, defaults, rest) {
    if (typeof (defaults) == 'undefined')
        defaults = 0;
    var val = (typeof (target) == 'undefined') ? defaults : target;
    if (val > rest)
        val = rest;
    return val;
};
var getRest = function (rest, quant) {
    var val = rest - quant;
    return (val < 0) ? 0 : val;
};
function generate(length, options) {
    var tmp = [];
    var nums;
    var specials;
    var uppers;
    var lowers;
    // Default values for arguments
    if (typeof (length) == 'undefined')
        length = defaultsConfig.length;
    if (length instanceof Array)
        length = utils_1.random(length[1], length[0]);
    var op = options || {
        specials: specials,
        nums: nums,
        uppers: uppers,
        lowers: lowers
    };
    // Assign quantity of different types
    specials = getOptionNum(op.specials, defaultsConfig.specials, length);
    length = getRest(length, specials);
    nums = getOptionNum(op.nums, defaultsConfig.nums, length);
    length = getRest(length, nums);
    uppers = getOptionNum(op.uppers, defaultsConfig.uppers, length);
    length = getRest(length, uppers);
    lowers = getOptionNum(op.lowers, defaultsConfig.lowers, length);
    length = getRest(length, lowers);
    // Make an array of symbols
    while (specials--)
        tmp.push(utils_1.special());
    while (nums--)
        tmp.push(utils_1.random(9).toString());
    while (uppers--)
        tmp.push(utils_1.upperChar());
    while (lowers--)
        tmp.push(utils_1.lowerChar());
    while (length--)
        tmp.push(utils_1.anyChar());
    // Shuffle the array and make a string
    return utils_1.shuffle(tmp).join('');
}
exports.default = generate;
