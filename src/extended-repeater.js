const { NotImplementedError } = require('../extensions/index.js');

function repeater(str, options) {
    str = String(str); 

    let repeatTimes = options.repeatTimes || 1;
    let separator = options.separator !== undefined ? options.separator : '+';
    let addition = options.addition !== undefined ? String(options.addition) : '';
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';

    let additionStr = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);

    let result = new Array(repeatTimes).fill(str + additionStr).join(separator);

    return result;
}

module.exports = {
    repeater
};