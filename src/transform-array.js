const { NotImplementedError } = require('../extensions/index.js');

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i = i + 2;
        break;
      case '--discard-prev':
        result.pop();
        break;
      case '--double-next':
        if (i !== arr.length - 1) {
          result.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (i !== 0) {
          result.push(arr[i - 1]);
        }
        break;
      default:
        result.push(arr[i]);
    }
  }
  return result;
};  

module.exports = {
  transform
};