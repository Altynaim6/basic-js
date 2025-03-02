function sortByHeight(arr) {
  const sortedArr = arr.filter(item => item !== -1).sort((a, b) => a - b);

  let index = 0;

  return arr.map(item => {
    if (item === -1) {
      return -1;  
    } else {
      return sortedArr[index++]; 
    }
  });
}

module.exports = {
  sortByHeight
};