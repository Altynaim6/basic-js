const { NotImplementedError } = require('../extensions/index.js');

function getCommonCharacterCount(s1, s2) {
    const countChars = (str) => {
        const map = {};
        for (let char of str) {
            map[char] = (map[char] || 0) + 1;
        }
        return map;
    };

    const freq1 = countChars(s1);
    const freq2 = countChars(s2);

    let commonCount = 0;

    for (let char in freq1) {
        if (freq2[char]) {
            commonCount += Math.min(freq1[char], freq2[char]);
        }
    }

    return commonCount;
}

module.exports = {
    getCommonCharacterCount
};