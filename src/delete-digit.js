const { NotImplementedError } = require('../extensions/index.js');

function deleteDigit(n) {
    const numStr = n.toString();
    let maxNum = 0;

    for (let i = 0; i < numStr.length; i++) {
        const newNum = Number(numStr.slice(0, i) + numStr.slice(i + 1));
        maxNum = Math.max(maxNum, newNum);
    }

    return maxNum;
}

module.exports = {
    deleteDigit
};