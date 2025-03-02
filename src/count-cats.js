const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {
  let count = 0;
  matrix.forEach((arr) => {
    count += arr.filter((el) => el === '^^').length;
  });
  return count;
}

module.exports = {
  countCats
};