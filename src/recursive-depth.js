module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    
    if (arr.find((e) => Array.isArray(e))) {
      return this.calculateDepth(arr.flat(), ++depth);
    }

    return depth;
  }
};
