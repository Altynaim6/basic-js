const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    if (arr.every(el => !Array.isArray(el))) {
      return depth;
    }
    return depth += this.calculateDepth(arr.flat());
  }
}

module.exports = {
  DepthCalculator
};